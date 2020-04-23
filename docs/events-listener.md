---
title: Events Listener
sidebar_label: Events Listener
---


In this section, methods related to events listener. Arianee protocol uses blockchain when a status is updated (ownership transfer, ...). Its uses blockchain events to notify users. 
Below methods are helpers to listen to this events

### Listen to blockchain events



```
ArianeeWallets.watch.on(eventName,function)
```

Trigger function when eventName is emitted on Arianee Protocol   

#### Parameter
1. `eventName` - `enum`:  Event name 
```
export const enum BlockchainEventWatcherEnum {
    Transfer='Transfer', // All certificate transfer from or to the current wallet
    TransferFrom='TransferFrom', // All certificate transfer from the current wallet
    TransferTo='TransferTo', // All certificate transfer to the current wallet
    IdentityValidate='URIValidate', // All identity validated
    IdentityUpdate ='URIUpdated' // All identity updated
}
```
2. `callback` - `function`:  function to call each time event occurs


#### Result
`function` returns `void`

> This method listens events in background and trigger newer events 


#### Example
```
wallet.watch.on('Transfer', (event) => {
console.log(event)
} )


>
[ { address: '0x512C1FCF401133680f373a386F3f752b98070BC5',
    blockHash:
     '0x0300e7dd95231d41f9d7b2b1ca3f0476e77fd34191efce09c161ed3abbf4c9ca',
    blockNumber: 14394608,
    logIndex: 0,
    removed: false,
    transactionHash:
     '0x421d30ada5d253912d2b7c88a22572a9c6773f7d50008d1c5ffb0e6e1ed0ae91',
    transactionIndex: 1,
    transactionLogIndex: '0x0',
    type: 'mined',
    id: 'log_949e28e4',
    returnValues:
     Result {
       '0': '0x135935c83aCF4E0C1Aa0BD948DC710eC76b478b0',
       '1': '0x85c4A51Bf16316954dCB92A4c8191dD649914F64',
       '2': '69850',
       _from: '0x135935c83aCF4E0C1Aa0BD948DC710eC76b478b0',
       _to: '0x85c4A51Bf16316954dCB92A4c8191dD649914F64',
       _tokenId: '69850' },
    event: 'Transfer',
    signature:
     '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    raw: { data: '0x', topics: [Array] } } ]



```
***


