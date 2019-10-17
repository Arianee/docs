---
id: ArianeeJSCertificate
title: Certificate
sidebar_label: Certificate
---


In this section, methods related to certificate management are covered

### Create certificate


```
ArianeeWallets.methods.createCertificate(data)
```
#### Parameter
1. `data` - `object`:  certificate creation data object
     - `uri` - `string`: certificate uri
     - `content` - `object` (optional) : certificate content object (json)
     - `hash` - `string` (optional): certificate imprint.  (either certificate or hash need to be provided)
     - `certificateId`- `number` (optional): arianee token id. Random if left empty
     - `passphrase` -  `string` (optional): token access passphrase. *should be put in QR Code/NFC*
     - `recoveryTimestamp` -  `number` (optional): timestamp until issuer can recover certificate ownership. Default 90 days from creation date.
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
     certificate:content})      
     .then((i) => {
          console.log("Arianee ID:"+i.certificateId);
          console.log("Passphrase:"+i.passphrase);
          
    })
     .catch(i => console.log("Creating certificate : error ", JSON.stringify(i)));
```
***

### Request certificate ownership
```
ArianeeWallets.methods.requestCertificateOwnership([certificateId],[passphrase][,isTest])
```
#### Parameter
1. `certificateId` - `number`:  arianee certificate id
2. `passphrase` - `string`:  token request passphrase
3. `isTest` - `boolean` (optional):  Just test if token is requestable with provided passphrase. Default: false

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

### Read certificate content and meta data
```
ArianeeWallets.methods.getCertificate(certificateId[,passphrase[,query]])
```
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



#### Result
`promise` returns `object`: The receipt of the blockchain transaction 


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


### Create a request link (todo)
```
ArianeeWallets.methods.getCertificate(certificateId[,passphrase[,query]])
```
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



#### Result
`promise` returns `object`: The receipt of the blockchain transaction 


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

    
    
    
    
### Prove ownership


## Create identity


### Ask for identity validation (KYB process)


### Publish identity

## Manage event

### Full documentation

If you want to dig deeper into arianeeJS, please 
[check ArianeeJS full  documentation](arianeeJS-SDK/README)

