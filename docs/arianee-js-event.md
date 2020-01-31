---
title: ArianeeEvent
sidebar_label: ArianeeEvent
---


In this section, methods related to certificate management are covered

### Create ArianeeEvent


```
ArianeeWallets.methods.createArianeeEvent(data)
```

Creates an ArianeeEvent

#### Parameter
1. `data` - `object`:  arianeeEvent creation data object
     - `uri` - `string`:  (optional) event uri
     - `contentImprint` - `string` (optional): arianeeEvent content imprint. (either contentImprint or content need to be provided)
     - `certificateId`- `number`: arianee token id. Random if left empty
     - `arianeeEventId`- `number`: (optional) arianeeEvent id. Random if left empty
     - `content` - `object` (optional) : arianeeEvent content object (json). (either contentImprint or content need to be provided)


#### Result
`promise` returns `object`: The receipt of the blockchain transaction + keys : 
     - `contentImprint` - `string` (optional): arianeeEvent content imprint.
     - `arianeeEventId`- `number`: arianeeEvent id.


> This method performs a blockchain transaction. It costs 1 event credit and Gas.



#### Example
```
const event={
    certificateId,
    content: {
        title:'title event',
        $schema: 'https://cert.arianee.org/version1/ArianeeEvent-i18n.json'
    }
}

const {  contentImprint, arianeeEventId } = await await wallet.methods.createArianeeEvent(event);
```
***

### Store ArianeeEvent's content 


```
ArianeeWallets.methods.storeArianeeEvent(certificateId,arianeeEventId, event.content,url)
```

Store content of ArianeeEvent on a arianee-rpc-server (https://github.com/Arianee/arianee-rpc-server).

#### Parameter
1. `certificateId`- `number`: arianee token id.
2. `arianeeEventId`- `number`: (optional) arianeeEvent id.
3. `content` - `object` (optional) : arianeeEvent content object (json)


#### Result
`promise` returns `any`


#### Example
```
await wallet
      .methods
      .storeArianeeEvent(
        certificateId, 
        arianeeEventId,
        event.content,
        'https://http://arianee.cleverapps.io/testnet/rpc');

```
***

### Accept an ArianeeEvent

```
ArianeeWallets.methods.acceptArianeeEvent(arianeeEventId)
```

Accept an ArianeeEvent. The arianeeEvent will be in the history (arianeeEvents list) of the certicates.

#### Parameter
1. `arianeeEventId`- `number`: (optional) arianeeEvent id.


#### Result
`promise` returns `TransactionObject`


> This method performs a blockchain transaction. It costs Gas.

#### Example
```
    await wallet.methods.acceptArianeeEvent(4433);

```
***

### Refuse an ArianeeEvent

```
ArianeeWallets.methods.refuseArianeeEvent(arianeeEventId)
```

Refuse an ArianeeEvent. The arianeeEvent will not be in the history (arianeeEvents list) of the certicates.

#### Parameter
1. `arianeeEventId`- `number`: (optional) arianeeEvent id.


#### Result
`promise` returns `TransactionObject`


> This method performs a blockchain transaction. It costs Gas.

#### Example
```
    await wallet.methods.refuseArianeeEvent(4433);

```
***
