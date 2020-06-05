---
title: Messaging
sidebar_label: Messaging
---


In this section, methods related to messaging management are covered


### Create Message


```
ArianeeWallets.methods.createMessage(data)
```

Creates a message

#### Parameter
1. `data` - `object`:  message creation data object
     - `contentImprint` - `string` (optional): message content imprint. (either contentImprint or content need to be provided)
     - `certificateId`- `number`: arianee token id. Random if left empty
     - `messageId`- `number`: (optional) message id. Random if left empty
     - `content` - `object` (optional) : message content object (json). (either contentImprint or content need to be provided)


#### Result
`promise` returns `object`: The receipt of the blockchain transaction + keys : 
- `contentImprint` - `string` (optional): message content imprint.
- `messageId`- `number`: message id.


> This method performs a blockchain transaction. It costs 1 message credit and Gas.



#### Example
```
const message={
    certificateId,
    content: {
        $schema: 'https://cert.arianee.org/version1/ArianeeMessage-i18nAlpha.json',
        title:'message title',
        content:'message content'
    }
}

const {  contentImprint, messageId } = await await wallet.methods.createMessage(event);
```
***

### Store message's content 


```
ArianeeWallets.methods.storeMessage(certificateId, messageId, content, url)
```

Store content of message on a arianee-rpc-server (https://github.com/Arianee/arianee-rpc-server).

#### Parameter
1. `certificateId`- `number`: arianee token id.
2. `messageId`- `number`: message id.
3. `content` - `object` : message content object (json)
4. `uri` - `string` : uri of rpc server where you want to store event content. It should be certificate issuer's rpc server.

#### Result
`promise` returns `any`


#### Example
```
await wallet
      .methods
      .storeMessage(
        certificateId, 
        messageId,
        message.content,
        'https://http://arianee.cleverapps.io/testnet/rpc');

```
***


### Get a message


```
ArianeeWallets.methods.getMessage(data)
```

Get a message

#### Parameter
1. `data` - `object`:  message request data object

     - `messageId`- `number`: (optional) message id. Random if left empty
     - `query` - `ConsolidatedCertificateRequest` (optional): object to request message
     - `url`- `string` (optional): RPC server url to get message
     - `forceRefresh` - `boolean` (optional) : boolean to force refresh of message content


#### Result
`promise` returns `object`: The receipt of the blockchain transaction + keys : 
- `certificateId` - number : certificate id linked to the message
    - `issuer` - object :
    - `isIdentityVerified` - boolean : issuer identity verified
    - `isIdentityAuthentic` - boolean : issuer identity authentic
    - `imprint` - string : issuer imprint
    - `identity`- string : issuer identity content
- `to` - `string` : message recipient public address
- `messageId`- `number`: message id
- `timestamp`- `timestamp`: message creation timestamp      

***


### Get my messages


```
ArianeeWallets.methods.getMyMessages(data)
```

Get my messages (related to my certificate)

#### Parameter
1. `data` - `object`:  messages request data object

     - `query` - `ConsolidatedCertificateRequest` (optional): object to request message
     - `url`- `string` (optional): RPC server url to get message


#### Result
`promise` returns `array of object`: 
- `certificateId` - number : certificate id linked to the message
- `issuer` - object :
    - `isIdentityVerified` - boolean : issuer identity verified
    - `isIdentityAuthentic` - boolean : issuer identity authentic
    - `imprint` - string : issuer imprint
    - `identity`- string : issuer identity content
- `to` - `string` : message recipient public address
- `messageId`- `number`: message id
- `timestamp`- `timestamp`: message creation timestamp      

***


### Mark a message as read


```
ArianeeWallets.methods.markAsRead(messageId)
```

Mark a message as read an send Aria to owner and wallet reward address 

#### Parameter
1. `messageId` - `number`:   message id




#### Result
`promise` returns `ExtendedBoolean`: 
- `isTrue` - `boolean`: message mark as read (success / fail)
- `code` : return code (message.markasread)'
- `message` : return message (message was mark as read)



> This method performs a blockchain transaction. It costs Gas

***


### Set optin/optout for a specific sender + certificate id for current wallet


```
ArianeeWallets.methods.setMessageAuthorizationFor(certificateId, senderAddress, bool)
```

Change send right for a message sender 

#### Parameter
1. `certificateId` - `number`:  Arianee certificate id
2. `senderAddress` - `address`:  Address of related sender
3. `bool` - `boolean`:  true or false. (apply flag)



#### Result
`promise` returns `object`: The receipt of the blockchain transaction 

> This method performs a blockchain transaction. It costs Gas


#### Example
```

// Change optin flag for a specific sender 
wallet.methods.setMessageAuthorizationFor(12345,'0x5f89d20c4a88FC2479b08522d5adD0b605001E3e',false).then((data)  => {
})
```
***


### Read optin/optout for a specific certificate id 


```
ArianeeWallets.methods.getMessageSenders({certificateId:CertificateId, query:ConsolidatedCertificateRequest})
```

Get optin status for a speficic certificateId based on current wallet

#### Parameter
1. `parameters` - `object`:  certificateId and ConsolidatedCertificateRequest



#### Result
`promise` returns `object`: [address]: isIssuerAuthorized


> Only return optin status of issuer only

#### Example
```

// Read optin flag for a specific sender
wallet.methods.getMessageSenders(12345).then((data)  => {
})

```

