---
title: Certificate
sidebar_label: Certificate
---


In this section, methods related to certificate management are covered

### Create certificate


```
ArianeeWallets.methods.createCertificate(data)
```

Creates an arianee certificate

#### Parameter
1. `data` - `object`:  certificate creation data object
     - `uri` - `string`: certificate uri
     - `content` - `object` (optional) : certificate content object (json)
     - `hash` - `string` (optional): certificate imprint.  (either content or hash need to be provided)
     - `certificateId`- `number` (optional): arianee token id. Random if left empty
     - `passphrase` -  `string` (optional): token access passphrase. *should be put in QR Code/NFC*
     - `recoveryTimestamp` -  `number` (optional): timestamp until issuer can recover certificate ownership. Default: 90 days from creation date.
     - `sameRequestOwnershipPassphrase` - `boolean` (optional): should passphrase be used as certificate request passphrase. Default: true


#### Result
`promise` returns `object`: The receipt of the blockchain transaction + keys : 
     - certificateId : arianee certificate id created
     - passphrase : certificate access passphrase


> This method performs a blockchain transaction. It costs 1 certificate credit and Gas



#### Example
```
// fetch certificate content
var certificate = await fetch("https://cert.arianee.org/cert/sampleCert.json");
var content = await certificate.json();

// Create a certificate based on a self hosted json  
await wallet.methods.createCertificate({
     uri: "https://cert.arianee.org/cert/sampleCert.json",
     content:content})      
     .then((i) => {
          console.log("Arianee ID:"+i.certificateId);
          console.log("Passphrase:"+i.passphrase);
          
    })
     .catch(i => console.log("Creating certificate : error ", JSON.stringify(i)));
```
***

### Store content of certificate


```
ArianeeWallets.methods.storeContentInRPCServer(certificateId,content,RPCURL)
```

Store content of an Arianee certificate

#### Parameter
1. `certificateId` - `number`:  Certificate Id of Arianee Certificate
2. `data` - `object`:  Exact content of Arianee Certificate
3. `url` - `string`: url of RPC Server. Usually, it is the url of issuer's RPC Server 

#### Result
`promise` returns `object`:

#### Example
```
// fetch certificate content
var certificate = await fetch("https://cert.arianee.org/cert/sampleCert.json");
var content = await certificate.json();

// Store content of a Arianee certificate
await wallet.methods.storeContentInRPCServer(
       1234,
     content,
    'https://arianee.cleverapps.io/testnet/rpc'
    )      
```
***

### Request certificate ownership
```
ArianeeWallets.methods.requestCertificateOwnership([certificateId],[passphrase])
```

Requests ownership of a given certificate

#### Parameter
1. `certificateId` - `number`:  arianee certificate id
2. `passphrase` - `string`:  token request passphrase

> This method performs a blockchain transaction. It costs Gas


#### Result
`promise` returns `object`: The receipt of the blockchain transaction 


#### Example
```
// Request certificate ownership
await wallet.methods.requestCertificateOwnership(3703454,'j2ukmnj6weyz')      
     .then(i => console.log("success"))
     .catch(i => console.log("fail"));
```

***

### Read certificate content and metadata
```
ArianeeWallets.methods.getCertificate(certificateId[,passphrase[,query]])
```

Reads certificate content, checks authenticity, and gather metadata information about a certificate (issuer, transfer history, events, owner,...)

#### Parameter
1. `certificateId` - `number`:  arianee certificate id
2. `passphrase` - `string`(optional):  token access passphrase. *If certificate is public (self hosted on a public server), passphrase are not required*
3. `query` - `object`(optional) : Default : all blocks are fetched
     - `isTransferable`: `boolean`: certificate is transferable with provided passphrase
     - `content`: `boolean`: certificate json content
     - `issuer`: `boolean`: issuer information
     - `owner`: `boolean`: owner information
     - `events`: `boolean`: transfer events list
     - `arianeeEvents`: `boolean`: arianee events list
     - `advanced`: `boolean`: token recovery timestamp
     - `getMessageSenders`: `boolean`: list of validated senders 



#### Result
`promise` returns `object`: an arianee certificate object


#### Example
```
// Fetch a certificate   
await wallet.methods.getCertificate(3703454,'j2ukmnj6weyz')
     .then((data)=> console.log(data));

> { content:
   { data:
      { '$schema': 'https://cert.arianee.org/version1/ArianeeAsset.json',
        name: 'Arianee',
        v: '0.1',
        serialnumber: [Array],
        brand: 'Arianee',
        model: 'Token goody',
        description:
         'Here is the digital passport of your  Arianee token goody, giving you a glimpse of an augmented ownership experience. This Smart-Asset has a unique ID. It is transferable and enables future groundbreaking features. \n Connect with the arianee team to learn more.',
        type: 'SmartAsset',
        picture:
         'https://www.arianee.org/wp-content/uploads/2019/02/Screen-Shot-2019-02-27-at-12.12.53-PM.png',
        pictures: [Array],
        socialmedia: [Object],
        externalContents: [Array],
        jsonSurcharger: 'url' },
     isAuthentic: true },
  issuer:
   { identity: { data: undefined, isAuthentic: false, isApproved: false },
     isIdentityAuthentic: false,
     isIdentityVerified: false },
  isTransferable: true,
  owner:
   { publicKey: '0x29059AA0a8D7eE82d5251410d9231d5077339B65',
     isOwner: false },
  events:
   CertificateEventsSummary { transfer: [ [Object], [Object] ], arianeeEvents: [] } }
```


***

### Read certificate content and metadata from link
```
ArianeeWallets.methods.getCertificateFromLink(link)
```

Reads certificate content, checks authenticity, and gather metadata information about a certificate (issuer, transfer history, events, owner,...) from an Arianee link

#### Parameter
1. `link` - `string`:  and arianee link (requestOwnership, proof, ...)



#### Result
`promise` returns `object`: an arianee certificate object


#### Example
```
// Fetch a certificate   
await wallet.methods.getCertificateFromLink('https://test.arian.ee/3703454,j2ukmnj6weyz')
     .then((data)=> console.log(data));

> { content:
   { data:
      { '$schema': 'https://cert.arianee.org/version1/ArianeeAsset.json',
        name: 'Arianee',
        v: '0.1',
        serialnumber: [Array],
        brand: 'Arianee',
        model: 'Token goody',
        description:
         'Here is the digital passport of your  Arianee token goody, giving you a glimpse of an augmented ownership experience. This Smart-Asset has a unique ID. It is transferable and enables future groundbreaking features. \n Connect with the arianee team to learn more.',
        type: 'SmartAsset',
        picture:
         'https://www.arianee.org/wp-content/uploads/2019/02/Screen-Shot-2019-02-27-at-12.12.53-PM.png',
        pictures: [Array],
        socialmedia: [Object],
        externalContents: [Array],
        jsonSurcharger: 'url' },
     isAuthentic: true },
  issuer:
   { identity: { data: undefined, isAuthentic: false, isApproved: false },
     isIdentityAuthentic: false,
     isIdentityVerified: false },
  isTransferable: true,
  owner:
   { publicKey: '0x29059AA0a8D7eE82d5251410d9231d5077339B65',
     isOwner: false },
  events:
   CertificateEventsSummary { transfer: [ [Object], [Object] ], arianeeEvents: [] } }
```


### Create a request ownership link 
```
ArianeeWallets.methods.createRequestOwnershipLink(certificateId[,passphrase])
```

Creates a link to request ownership of a given certificate. Wallet need to be the owner of the certificate 

#### Parameter
1. `certificateId` - `number`:  arianee certificate id
2. `passphrase` - `string`(optional):  token request passphrase. 


#### Result
`promise` returns `object`: The receipt of the blockchain transaction 

> This method performs a blockchain transaction. It costs Gas

#### Example
```
await wallet.methods.createRequestTransferOwnershipLink(3703454)
     .then((data)=> console.log(data));

> { certificateId: 3703454,
  passphrase: 'evo8mrqmuo42',
  link: 'https://test.arian.ee/3703454,evo8mrqmuo42' }
```

***

    
### Test if a certificate is requestable
```
ArianeeWallets.methods.isCertificateOwnershipRequestable(certificateId,passphrase)
```

Check if a certificate is requestable given the provided passphrase.

#### Parameter
1. `certificateId` - `number`:  arianee certificate id
2. `passphrase` - `string`:  token request passphrase. 

#### Result
`promise` returns `ExtendedBoolean`: 
- `isTrue`:`true` if certificate is requestable, `false` otherwise.
- `code` return code
- `message`return message


#### Example
```
await wallet.methods.isCertificateOwnershipRequestable(3703454,'evo8mrqmuo42')
        .then((data)=> console.log(data))

> {isTrue: true, code: 'certicate.requestable', message: 'certificate is requestable'}
```


***
    
### Create a proof link
```
ArianeeWallets.methods.createCertificateProofLink(certificateId[,passphrase])
```

Creates a link to generate a proof of ownership

#### Parameter
1. `certificateId` - `number`:  arianee certificate id
2. `passphrase` - `string`(optional):  token proof passphrase. 

#### Result
`promise` returns `object`: A link object containing certificateId, passphrase, and  method 'proof' and final link


> This method performs a blockchain transaction. It costs Gas

#### Example
```
await wallet.methods.createCertificateProofLink(3703454)
     .then((data)=> console.log(data));

> { method: 'proof', 
  certificateId: 3703454,
  passphrase: 's4cx5wnr8bol',
  link: 'https://test.arian.ee/proof/3703454,s4cx5wnr8bol' }
```

***
    
### Test a proof
```
ArianeeWallets.methods.isCertificateProofValid(certificateId,passphrase)
```

Check if a proof is valid. A proof is valid, if current owner created the proof within a 300 seconds timeframe.

#### Parameter
1. `certificateId` - `number`:  arianee certificate id
2. `passphrase` - `string`:  token proof passphrase. 

#### Result
`promise` returns `ExtendedBoolean`: 
- `isTrue`:`true` if proof is valid, `false` otherwise.
- `code` return code
- `message`return message

#### Example
```
await wallet.methods.isCertificateProofValid(3703454,'j2ukmnjd6weyz')
        .then((data)=> console.log(data))

> {isTrue:true, code:'proof.token.valid', message: 'proof is valid'}
```




    
### Prove ownership

(To document)

## Create identity


### Ask for identity validation (KYB process)

### Publish identity

(To document)

## Manage event

(To document)
