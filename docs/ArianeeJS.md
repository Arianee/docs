---
id: ArianeeJS
title: ArianeeJS library
sidebar_label: ArianeeJS library
---

ArianeeJS is the first official SDK to interact with the Arianee Protocol


If you want to play straight away with the library, a **[live demo](livedemo)** is available directly within your browser

## Installation

We recommend you employ the certification module as an NPM package in your application.

``` 
$ npm i --save @arianee/arianeejs 
```

To import the package inside you app
``` 
import { Arianee } from '@arianee/arianeejs'
```


If you want to use it directly in your browser with javascript, you can include  
``` 
<script src="https://unpkg.com/@arianee/arianeejs@latest/browser/bundle.js">
</script> 
``` 
    
***
***

## Initialize

First you need to instantiate arianeeJS 
``` 
new Arianee();
``` 

``` 
Arianee.connectToProtocol([networkName]);
``` 
#### Parameter
1. `networkName` - `string`(optional):  The network to use ("mainnet"|"testnet") (Defaults to `"testnet"`)

#### Result
`promise` returns `object`: ArianeeWalletBuilder object - The arianee instance with the choosen network
`
>*Be careful. connectToProtocol is asynchronous. You need to use await or a promise.*

#### Example
``` 
const arianeeLib = new Arianee();
const arianee = await arianeeLib.connectToProtocol("testnet");
``` 


***
***

## Create wallets
To interact with the Arianee protocol, you need a wallet. Few options exists


### From privatekey
If you want to use a plain private key.
```
ArianeeWalletBuilder.fromPrivateKey(privatekey);
``` 

#### Parameter
1. `privatekey` - `string`:  a string representing a 64 hex digits prefixed with 0x 

#### Result
`object`: ArianeeWallet object - an arianee wallet object

#### Example
```
let wallet = arianee.fromPrivateKey('0x516bd2a1d8fbff19ef39501b17176def4150589d9200df1f34e6d91f57f5f40b');
``` 

***

### From randomkey
If you want to generate a random wallet
```
ArianeeWalletBuilder.fromRandomKey();
``` 


#### Result
`object`: ArianeeWallet object - an arianee wallet object

#### Example
```
let wallet = arianee.fromRandomKey();
``` 

***


### From mnemonic 
If you want to generate a wallet based on a 12 words mnemonic 


```
ArianeeWalletBuilder.fromMnemonic([mnemonic]);
``` 

#### Parameter
1. `mnemomonic` - `string`:  a string representing 12 words passphrase. 




#### Result
`object`: ArianeeWallet object - an arianee wallet object

>Generate a BIP-039 + BIP-044 wallet from mnemonic deriving path using the wordlist. The language is English (en). The derivation path is “m/44’/60’/0’/0/0”


#### Example
```
let wallet = arianee.fromMnemonic('path return wheel crime share torch orbit aunt sponsor earth feel prepare');
``` 
*in progress*



***



### From random mnemonic 
Generate a random wallet based on a 12 words mnemonic 
```
ArianeeWalletBuilder.fromRandomMnemonic();
``` 
#### Result
`object`: ArianeeWallet object - an arianee wallet object

>Generate a BIP-039 + BIP-044 wallet from mnemonic deriving path using the wordlist. The language is English (en). The derivation path is “m/44’/60’/0’/0/0”

#### Example
```
let wallet = arianee.fromRandomMnemonic();
``` 

### public and private keys

When your wallet is instancied, public key and private key are available.


```
let publicKey = wallet.publicKey;
```

```
let privateKey = wallet.privateKey;
```


***
***

## Manage Aria and Gas

To interact with Arianee Protocol, you need the native cryptotokens (currently POA) and Aria, our token

### Request POA
Ask for POA Faucet and receive 0.05 POA if your wallet is below
```
ArianeeWallet.getFaucet();
``` 

#### Result
`promise` returns `object`: an object representing the receipt from the blockchain transaction or {"return":"enough_ether"}

#### Example
```
await wallet.getFaucet()
     .then(i => console.log('success'))
     .catch(i => console.log('fail'));
```    
***

### Get POA Balance
```
ArianeeWallet.methods.balanceOfGas()
```
#### Result
`promise` returns `number|string`: Gas in wei

#### Example
```
let gas = wallet.methods.balanceOfGas();
```    

***

### Request ARIA
Ask for ARIA Faucet and receive some ARIA
```
ArianeeWallet.getAria();
``` 
#### Result
`promise` returns `object`: an object representing the receipt from the blockchain transaction

#### Example
```
await wallet.getAria()
     .then(i => console.log('success'))
     .catch(i => console.log('fail'));
```     

>ARIA Faucet is available only on testnet. You need to buy Aria tokens directly on exchange or through Arianee (hello@arianee.org)

***

### Get ARIA Balance
```
ArianeeWallet.methods.balanceOfAria()
```
#### Result
`promise` returns `number|string`: Aria in wei


#### Example
```
let aria = await wallet.methods.balanceOfAria();
```    




***
***

## Approve Arianee protocol
Arianee protocol is using ARIA tokens.
Because ARIA are yours, we can't take it without your permission.
To let Arianee Protocol spend your ARIA tokens, your wallet need to approve the arianee protocol.

#### Example
```
await wallet.ariaContract.methods.approve(wallet.storeContract.options.address,"10000000000000000000000000000").send()
     .then(i => console.log('arianee approved')
     .catch(i => console.log('fail')); 
``` 
#### Result
`promise` returns `object`: an object representing the receipt from the blockchain transaction

> This method performs a blockchain transaction. Costs  Gas

***
***

## Buy credit
Each paid feature on Arianee protocol need *credits* to be spend.

```
ArianeeWallets.storeContract.methods.buyCredit([creditType], [numberOfCredit], [publicAddress]).send()
```

#### Parameter
1. `creditType` - `integer`:  the type of credit (0: certificate, 1: event, 2: message) 
2. `numberOfCredit` - `integer`:  the number of credit to buy
2. `publicAddress` - `string`:  the public address of credit receiver




#### Result
`promise` returns `object`: The receipt of the blockchain transaction


#### Example
```
// Buy 5 certificate credits  
await wallet.storeContract.methods.buyCredit(0, 5, wallet.publicKey).send()   
     .then(i => console.log("Buying credits"))
     .catch(i => console.log("Fail" ));
```

> You need ARIA tokens and your wallet need to approve the arianee protocol (see above)

> This method performs a blockchain transaction. Costs  Aria and Gas
***
***



## Manage certificates

In this section, methods related to certificate management are covered

### Create certificate


```
ArianeeWallets.methods.hydrateToken([data])
```
#### Parameter
1. `data` - `object`:  token creation data object
     - `uri` - `string`: certificate uri
     - `certificate` - `object` (optional) : certificate content object (json)
     - `hash` - `string` (optional): certificate imprint.  (either certificate or hash need to be provided)
     - `tokenId`- `number` (optional): arianee token id. Random if left empty
     - `passphrase` -  `string` (optional): token access passphrase. *should be put in QR Code/NFC*
     - `tokenRecoveryTimestamp` -  `number` (optional): timestamp until issuer can recover certificate ownership. Default 90 days from creation date.
     - `initialKeyIsRequestKey` - `boolean` (optional): should passphrase be used as token request passphrase. Default: true


#### Result
`promise` returns `object`: The receipt of the blockchain transaction + keys : 
     - tokenId : arianee certificate id created
     - passphrase : token access passphrase


> This method performs a blockchain transaction. It costs 1 certificate credit and Gas



#### Example
```
// fetch certificate content
var certificate = await fetch("https://cert.arianee.org/cert/sampleCert.json");
var content = await certificate.json();

// Create a certificate based on a self hosted json  
await wallet.methods.hydrateToken({
     uri: "https://cert.arianee.org/cert/sampleCert.json",
     certificate:content})      
     .then((i) => {
          console.log("Arianee ID:"+i.tokenId);
          console.log("Passphrase:"+i.passphrase);
          
    })
     .catch(i => console.log("Creating certificate : error ", JSON.stringify(i)));
```


### Transfer / Request certificate


### Prove ownership


## Create identity


### Ask for identity validation (KYB process)


### Publish identity

## Manage event

### Full documentation

If you want to dig deeper into arianeeJS, please 
[check ArianeeJS full  documentation](arianeeJS-SDK/README)

