---
id: ArianeeJSEconomy
title: Economy
sidebar_label: Economy
---

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
ArianeeWallets.storeContract.methods.buyCredit(creditType, numberOfCredit, publicAddress).send()
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


