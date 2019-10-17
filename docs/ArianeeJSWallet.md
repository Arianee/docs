---
id: ArianeeJSWallet
title: Wallet
sidebar_label: Wallet
---

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
ArianeeWalletBuilder.fromMnemonic(mnemonic);
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

