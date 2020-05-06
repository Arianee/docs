---
title: Arianee Wallet Sharing
sidebar_label: Arianee Wallet Sharing (BETA)
---

***Still in BETA***

To increase user adoption, and smoother user experience, Arianee designed a standard to share a user wallet between multiple mobile applications.

The idea is to let a brand (or a wallet provider) designed an app, and, on first launch, detect if other Arianee compatible wallet apps are installed on the device, and if yes, to let import the main wallet and avoid creating multiple wallets for the same user.

## Workflow

You need a user, and 2 Arianee compatible wallet app.
One (App#1) that will import the wallet from the other app 
One (App#2) with an already initiliazed wallet  

* User launch App#1
* App#1 detects if App#2 is installed,  
* User choose to import his/her wallet from App#2
* App#1 redirect User to App#2 (with a one-time-publickey for privacy reason)
* App#2 receives a deeplink with App#1 scheme and one-time-publickey
* App#2 checks if scheme exists in the list of validated Arianee Identity
* App#2 ask for a confirmation from User
* App#2 encrypt wallet with public key, and redirect user to App#1
* App#1 receives a deeplink with encrypted wallet
* App#1 decrypt wallet 
* Done !

## Detailed workflow

An [exemple ionic app](https://github.com/Arianee/apkss-example/) is available and open source.

This app implements the whole Arianee Wallet Sharing process.


## Define scheme in Arianee Identity
Each brand/company on Arianee is uniquely identified using Arianee Identity smart contract, and ensure that these entities passed the Arianee KYB process.

In their identity, they can put their "mobile app scheme". It's a unique identifier defined when an app is on an app store (both google & apple).
So, all identities with a scheme mean that there's an "official" wallet app related to the brand.

With that in mind, it's easy for a wallet app developer to detect if a user got an Arianee Compatible wallet app.

Two keys in identity json content define mobile app scheme :
* iosScheme for iOS
* androidScheme for Android

## Detect compatible wallet app

***Your app need to check if a compatible app is installed on the user device and eventually propose to import a wallet from a compatible app to the user***

1. App retrieves compatible wallet apps list
>You can have the whole list in a centralized way : 
https://api.arianee.org/report/apkss/identities

```
[{
    name: "Arianee",
    iosScheme: "com.arianee.wallet",
    androidScheme: "com.arianee.wallet",
    address: "0xb908B66915ecD1ec31e669adc9C71BDcE44EC601",
    identityId: "0xb908B6",
    appName: "Arianee Wallet"
}]
```

2. Detect installed apps
> [cordova-plugin-appavailability](https://www.npmjs.com/package/cordova-plugin-appavailability) is a cordova plugin to check if an app is installed on the same device

3. User choose app to import the wallet from

4. App doublechecks scheme of selected app in Arianee identity 
> Check [read-identity-using-shortcode](/docs/arianee-js-identity#read-identity-using-shortcode)


## Forge and Arianee Sharing Wallet request

***Your app need to prepare a link that will open the chosen wallet app including all mandatory information.***

1. Create a key pair to encrypt/decrypt wallet between apps. (see [encrypt](#encrypt) for more infos)


```
    encryptAlgorithm = {
        name: 'RSA-OAEP',
        modulusLength: 4096,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: 'sha-512'
    };
    const keyUsages = ['encrypt', 'decrypt'];
    const keys = await crypto.subtle.generateKey(this.encryptAlgorithm, true, keyUsages);
    const privateKey = await crypto.subtle.exportKey('jwk', keys.privateKey);
    const publicKey = await crypto.subtle.exportKey('jwk', keys.publicKey);
```

> Arianee ecosystem handle only this algorithm for now

2. Store the public/private key, somewhere self (check secure storage)

3. Redirect user using this deeplink :
 
The deeplink is forged that way :
 
```
let deeplink = scheme + '://apkssRequest?requestId=0x135935&publicKey=' + JSON.stringify(publicKey)
```
> * Scheme : Scheme of the app, can be found in the identity previously requested
> * Route : apkssRequest
> * QueryParams:
>  * requestId: The identity ID of your identity
>  * publicKey : The public key formated in JWK (see [encrypt](#encrypt)) 



## Receiving a Arianee Wallet Sharing request

***Your app need to handle Arianee Wallet Sharing request deeplink and reply with an Arianee Wallet Sharing response deeplink***

1. App need to handle ***apkssRequest*** route.

2. App checks if ***requestingId*** QueryParam match the identity schema using getIdentity 
> Check [read-identity-using-shortcode](/docs/arianee-js-identity#read-identity-using-shortcode) 




3. App *need* to ask user's permission to share his/her wallet to requesting app

4. Encrypt the mnemonic with requester public key

```
const algorithm = {
        name:"RSA-OAEP",
        hash: "SHA-512"
      };

const publicKey = await crypto.subtle.importKey(
    'jwk',
    jwk,
    algorithm,
    true,
    jwk.key_ops
);
const enc = new TextEncoder()
const encryptedMnemonics = await crypto.subtle.encrypt(algorithm, publicKey, enc.encode(mnemonic));
```

5. App forge Arianee wallet sharing response deeplink with encrypted mnemonic

```
const encryptedMnemonicsBuffer = new Buffer(encryptedMnemonics)
let deeplink = Schema+'://apkssResponse?encryptedMnemonics='+JSON.stringify(objectLink.encryptedMnemonics)
```
> * Scheme : Scheme of the requesting app, can be found with getIdentity from the requestId 
> * Route : apkssResponse
> * QueryParams: encryptedMnemonics : the encrypted mnemonics in buffer



5. App redirect user using deeplink


## Receiving an Arianee Wallet Sharing response

***Your app need to handle Arianee Wallet Sharing response deeplink and eventually replaces existing wallet***

1. App need to handle ***apkssResponse*** route.

2. App *need* to ask user's permission to import this wallet 

3. App decrypts ***encryptedMnemonics*** Query Param using previously created keypair
```    
    const privateKeyCrypt = await crypto.subtle.importKey('jwk', privateKey, this.encryptAlgorithm, true, ['decrypt']);

    const encryptedMnemonicArray = new Uint8Array(encryptedMnemonics.length);
    for (let i = 0; i < encryptedMnemonics.length; i++) {
      encryptedMnemonicArray[i] = encryptedMnemonics[i];
    }

    const decrypt = await crypto.subtle.decrypt(this.encryptAlgorithm, privateKeyCrypt, encryptedMnemonicArray);
    const mnemonic = new TextDecoder().decode(decrypt);
```

4. App replaces existing wallet
```
wallet.fromMnemonic(mnemonic);
```
 
## Encrypt <a id="encrypt"></a> 

To ensure compatibility between all the Arianee application we need to use the sames encryption system.

The encryption system required at this time is :
* Algorithm: RSA-OAEP
* Hash: sha-512
* Key length: 4096

This requirement is compatible with the [Web Crupto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)

The compatible algorithm will evolve over the time. You must integrate them to ensure compatibility with other app.

To communicate correctly the public key please use a JSON Web Key as defined in [RFC7517](https://tools.ietf.org/html/rfc7517)

