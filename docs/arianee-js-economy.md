---
title: Economy
sidebar_label: Economy
---

To interact with Arianee Protocol, you need the native cryptotokens (currently POA) and Aria, our token.

### Request POA
Ask for POA Faucet and receive 0.05 POA if your wallet is below
```
ArianeeWallet.requestPoa();
``` 

#### Result
`promise` returns `object`: an object representing the receipt from the blockchain transaction or {"return":"enough_ether"}

#### Example
```
await wallet.requestPoa()
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
ArianeeWallet.requestAria();
``` 
#### Result
`promise` returns `object`: an object representing the receipt from the blockchain transaction

#### Example
```
await wallet.requestAria()
     .then(i => console.log('success'))
     .catch(i => console.log('fail'));
```     

>ARIA Faucet is available only on testnet. You need to buy Aria tokens directly on exchange or through Arianee (contact hello@arianee.org)

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
To let Arianee Protocol spend your ARIA tokens, your wallet needs to approve the arianee protocol.

#### Example
```
await wallet.methods.approveStore()
     .then(i => console.log('arianee approved')
     .catch(i => console.log('fail')); 
``` 
#### Result
`promise` returns `object`: an object representing the receipt from the blockchain transaction

> This method performs a blockchain transaction. Costs  Gas

***
***

## Buy credits
Each paid feature on Arianee protocol need *credits* to be spend.

```
ArianeeWallets.methods.buyCredits(creditType, numberOfCredit, publicAddress)
```

#### Parameter
1. `creditType` - `string`:  the type of credit 'certificate', 'event', 'message') 
2. `numberOfCredit` - `integer`:  the number of credit to buy
3. `publicAddress` - `string`: (optional) the public address of credit receiver. Default: current wallet public address

#### Result
`promise` returns `object`: The receipt of the blockchain transaction


#### Example
```
// Buy 5 certificate credits  
await wallet.methods.buyCredits('certificate', 5).send()   
     .then(i => console.log("Buying credits"))
     .catch(i => console.log("Fail" ));
```

> You need ARIA tokens and your wallet needs to approve the arianee protocol (see above)

> This method performs a blockchain transaction. Costs Aria and Gas
***
***


