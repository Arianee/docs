---
title: Arianee Wallet Sharing
sidebar_label: Arianee Wallet Sharing (BETA)
---

***Still in BETA***

To increase user adoption and provide a smoother user experience, Arianee designed a standard to share the same wallet across multiple mobile applications.

This standard defines how a mobile application can check if another Arianee compatible application is installed on the device  and, if so, import the main wallet used for this other application. This avoids creating multiple wallets for the same user.

## Workflow

The workflow starts with two Arianee compatible applications: 

The first (App#1) that will import the wallet from the other mobile application 

The second (App#2) with an already initialized wallet  

* User launches App#1
* App#1 detects if App#2 is installed on the device
* The user confirms his/her desire to import the wallet from App#2 to App#1
* App#1 forges an Arianee Sharing Wallet request and redirects the user to App#2 (with a one-time public key, for privacy reasons)
* App#2 receives the Arianee Sharing Wallet request, including App#1 scheme and the one-time public key
* App#2 confirms if App#1 scheme exists in the list of verified Brand Identities
* The user confirms his/her desire to export the wallet to App#1
* App#2 encrypts the wallet with the one-time public key and redirects the user to App#1
* App#1 receives a deeplink with the encrypted wallet
* App#1 decrypts and import the wallet 
* Done !

An open source [exemple ionic app](https://github.com/Arianee/apkss-example/) is available for more details. This application implements the whole Arianee Wallet Sharing process.


## About "mobile app schemes"
In order to avoid rogue applications to request access to the wallet stored in an Arianee compatible application, or the other way around, the Arianee wallet sharing must be done between applications with a "mobile app scheme" backed by a verified Brand.

To be verified by the Arianee project a Brand must go through a [Know your business (KYB) process](kyb-process) leading to its Brand Identity registration on the Arianee Identity smart contract. Any verified Brand can then store a "mobile app scheme" in the content (JSON file) of its Brand Identity. The "mobile app scheme" is a unique identifier created when a mobile application is released on an app store (Google & Apple).

In short, when developing a mobile application, **a requirement for the Arianee wallet sharing to work is that the "mobile app scheme" of App#1 and App#2 are stored in verified Brand identities**. Two "mobile app schemes" can be stored in the content (JSON file) of a Brand identity:

* iosScheme for iOS
* androidScheme for Android

## How to detect a compatible wallet application ?

***First, App#1 needs to check if a compatible wallet application is installed on the user device and, if so, it should propose to import the main wallet from this compatible wallet application***

1. App#1 retrieves the list of "mobile app schemes" backed by verified Brands
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

2. App#1 detects mobile applications installed on the user device and with a "mobile app scheme" backed by verified Brand
> [cordova-plugin-appavailability](https://www.npmjs.com/package/cordova-plugin-appavailability) is a cordova plugin to check if an app is installed on the device

3. The user chooses the app (App#2) to import the wallet from

4. App#1 double checks the "mobile app scheme" of App#2 in Arianee identity 
> Check [read-identity-using-shortcode](/docs/arianee-js-identity#read-identity-using-shortcode)


## How to forge an Arianee Sharing Wallet request ?

***Second, App#1 needs to forge a link that will open App#2 and carry all the mandatory information to pursue the process.***

1. App#1 creates a key pair (PrivateOneTimeKey & PublicOneTimeKey) to encrypt/decrypt the wallet between App#1 and App#2. (see [About encryption](#encrypt) for more details)


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

> Please note the keys should use a JSON Web Key as defined in [RFC7517](https://tools.ietf.org/html/rfc7517).
>
> Please note the Arianee ecosystem only handles this algorithm for now

2. App#1 stores the key pair (PrivateOneTimeKey & PublicOneTimeKey) somewhere safe (check secure storage for more details - documentation ongoing)

3. App#1 forges the following deeplink and it redirects the user with this deeplink :

```
let deeplink = scheme + '://apkssRequest?requestId=0x135935&publicKey=' + JSON.stringify(publicKey)
```
> * Scheme : "mobile app scheme" of the requested App#2
> * Route : apkssRequest
> * QueryParams:
>  * requestId: The Brand identity ID of the Brand Identity backing App#1
>  * publicKey : PublicOneTimeKey (formated with the JSON Web Key as defined in [RFC7517](https://tools.ietf.org/html/rfc7517))



## How to handle an Arianee Wallet Sharing request ?

***Next, App#2 needs to handle the Arianee Wallet Sharing request and it should return an Arianee Wallet Sharing response. Since App#1 might be App#2 in some other cases, All mobile applications should be able to handle an Arianee Wallet Sharing request.***

1. App#2 needs to handle ***apkssRequest*** route.

2. App#2 checks if ***requestId*** QueryParam matches the Brand identity schema using getIdentity 
> Check [read-identity-using-shortcode](/docs/arianee-js-identity#read-identity-using-shortcode) 


3. App#2 should ask user's permission to share its main wallet with App#1

4. App#2 encrypts the mnemonic of its main wallet with the ***publickey*** (PublicOneTimeKey)

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

Please note the publickey (PublicOneTimeKey) should use a JSON Web Key as defined in [RFC7517](https://tools.ietf.org/html/rfc7517).

5. App#2 forges the Arianee Wallet Sharing response deeplink with encrypted mnemonic

   ```
   const encryptedMnemonicsBuffer = new Buffer(encryptedMnemonics)
   let deeplink = Scheme +'://apkssResponse?encryptedMnemonics='+JSON.stringify(objectLink.encryptedMnemonics)
   ```

   > * Scheme : "mobile app scheme" of the requesting App#1, can be found with getIdentity from the requestId 
   > * Route : apkssResponse
   > * QueryParams: 
   > * encryptedMnemonics : the encrypted mnemonic in buffer

6. App#2 redirects the user with this deeplink


## How to handle an Arianee Wallet Sharing response ?

***Last, App#1 needs to handle the Arianee Wallet Sharing response deeplink and import the wallet from App#2***

1. App#1 needs to handle ***apkssResponse*** route

2. App#1 should ask user's permission to import the main wallet of App#2

3. App#1 decrypts the ***encryptedMnemonics*** QueryParam using the key pair (PrivateOneTimeKey & PublicOneTimeKey) it created and stored earlier
```    
    const privateKeyCrypt = await crypto.subtle.importKey('jwk', privateKey, this.encryptAlgorithm, true, ['decrypt']);

    const encryptedMnemonicArray = new Uint8Array(encryptedMnemonics.length);
    for (let i = 0; i < encryptedMnemonics.length; i++) {
      encryptedMnemonicArray[i] = encryptedMnemonics[i];
    }

    const decrypt = await crypto.subtle.decrypt(this.encryptAlgorithm, privateKeyCrypt, encryptedMnemonicArray);
    const mnemonic = new TextDecoder().decode(decrypt);
```

Please note the privatekey (PrivateOneTimeKey) should use a JSON Web Key as defined in [RFC7517](https://tools.ietf.org/html/rfc7517).

4. App#1 imports the main wallet of App#2
```
wallet.fromMnemonic(mnemonic);
```

## About encryption <a id="encrypt"></a> 

Interoperability across mobile applications is essential for the Arianee protocol adoption and using the same encryption system is a good beginning to support interoperability. 

The encryption system used is compatible with the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API): 
* Algorithm: RSA-OAEP
* Hash: sha-512
* Key length: 4096

Please note the algorithm used  will evolve over time. You must integrate the latest algorithm to ensure compatibility with other mobile applications.

Also, to communicate correctly the keys should use a JSON Web Key as defined in [RFC7517](https://tools.ietf.org/html/rfc7517).
