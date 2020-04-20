---
title: Arianee Wallet Sharing
sidebar_label: Arianee Wallet Sharing
---

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

{"name":"Arianee","iosScheme":"com.arianee.wallet","androidScheme":"com.arianee.wallet"}



## Detect compatible wallet app

***Your app need to check if a compatible app is installed on the user device and eventually propose to import a wallet from a compatible app to the user***

1. App retrieves compatible wallet apps list
>You can have the whole list in a centralized way : 
https://api.arianee.org/report/mainnet/identities

2. Detect installed apps
> [cordova-plugin-appavailability](https://www.npmjs.com/package/cordova-plugin-appavailability) is a cordova plugin to check if an app is installed on the same device

3. User choose app to import the wallet from

4. App doublechecks scheme of selected app in Arianee identity  
>TODO: link to identity mnemonic ?


## Forge and Arianee Sharing Wallet request

***Your app need to prepare a link that will open the chosen wallet app including all mandatory information.***

1. Create a key pair to encrypt/decrypt wallet between apps.

```
    encryptAlgorithm = {
        name: 'RSA-OAEP',
        modulusLength: 4096,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: 'sha-512'
    };
    const privateKey = await crypto.subtle.exportKey('jwk', keys.privateKey);
    const publicKey = await crypto.subtle.exportKey('jwk', keys.publicKey);
```

> Arianee ecosystem handle only this algorithm for now

2. Store the public/private key, somewhere self (check secure storage)

3. Redirect user using this deeplink :
```
let deeplink = scheme + '://apkssRequest?requestingApp=com.arianee.plastron&publicKey=' + JSON.stringify(publicKey)
```
> **scheme** is the selected scheme

> **requestingApp** value is the scheme of the current app 


## Receiving a Arianee Wallet Sharing request

***Your app need to handle Arianee Wallet Sharing request deeplink and reply with an Arianee Wallet Sharing response deeplink***

1. App need to handle ***apkssRequest*** route.

2. App checks if ***requestingApp*** QueryParam match the identity schema using getIdentity 
>TODO : link to mnemonic ? add param in request // Add link to method in identity section

3. App *need* to ask user's permission to share his/her wallet to requesting app

4. App forge Arianee wallet sharing response deeplink with encrypted mnemonic

```
objectLink = handleNativeLink (link) // link is deeplink wallet sharing request
let deeplink = objectLink.receiver+'://test/apkssResponse?encryptedMnemonics='+objectLink.encryptedMnemonics
```
>TODO : why test ? add response scheme && identity public key ?


**encryption method**
```
  async encryptMnemonics(jwk:JsonWebKey):Promise<ArrayBuffer>{

    if(jwk.alg === "RSA-OAEP-512"){
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

      // 12 words mnemonic
      const mnemonic = await this.userService.getMnemonic().pipe(take(1)).toPromise();
      
      const enc = new TextEncoder()
      return await crypto.subtle.encrypt(algorithm, publicKey, enc.encode(mnemonic));
    }
    else{
      console.error('[APKSS] Encrypt algorithm not supported');
    }
  }
```

5. App redirect user using deeplink


## Receiving an Arianee Wallet Sharing response

***Your app need to handle Arianee Wallet Sharing response deeplink and eventually replaces existing wallet***

1. App need to handle ***apkssResponse*** route.

2. App *need* to ask user's permission to import this wallet & check if's a legit app 
> Todo add link to identity // add mnemonic param

3. App decrypts ***encryptedMnemonics*** Query Param using previously created keypair
```
    const privateKey = await storage.get('apkssKey');
    const privateKeyCrypt = await crypto.subtle.importKey('jwk', JSON.parse(privateKey), this.encryptAlgorithm, true, ['decrypt']);

    const encrypted2 = new Uint8Array(encryptedMnemonics.length);
    for (let i = 0; i < encryptedMnemonics.length; i++) {
      encrypted2[i] = encryptedMnemonics[i];
    }

    const decrypt = await crypto.subtle.decrypt(this.encryptAlgorithm, privateKeyCrypt, encrypted2);
```

4. App replaces existing wallet

