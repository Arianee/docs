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


### Create certificate and store certificate content


```
ArianeeWallets.methods.createAndStoreCertificate(data)
```

Creates an arianee certificate and store content in RPC server

#### Parameter
1. `data` - `object`:  certificate creation data object
     - `uri` - `string`: certificate uri
     - `content` - `object` (optional) : certificate content object (json)
     - `hash` - `string` (optional): certificate imprint.  (either content or hash need to be provided)
     - `certificateId`- `number` (optional): arianee token id. Random if left empty
     - `passphrase` -  `string` (optional): token access passphrase. *should be put in QR Code/NFC*
     - `recoveryTimestamp` -  `number` (optional): timestamp until issuer can recover certificate ownership. Default: 90 days from creation date.
     - `sameRequestOwnershipPassphrase` - `boolean` (optional): should passphrase be used as certificate request passphrase. Default: true
2. `url` - `string`: url of RPC Server. Usually, it is the url of issuer's RPC Server 
     

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






### Store certificate content 


```
ArianeeWallets.methods.storeContentInRPCServer(certificateId, content, RPCURL)
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
ArianeeWallets.methods.requestCertificateOwnership(certificateId, passphrase)
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
ArianeeWallets.methods.getCertificate(certificateId [, passphrase] [, query])
```

Reads certificate content, checks authenticity, and gather metadata information about a certificate (issuer, transfer history, events, owner,...)

#### Parameter
1. `certificateId` - `number`:  arianee certificate id
2. `passphrase` - `string`(optional):  token access passphrase. *If certificate is public (self hosted on a public server), passphrase are not required*
3. `query` - `object`(optional) : Default : all blocks are fetched
     - `isRequestable`: `boolean`: certificate is transferable with provided passphrase
     - `content`: `boolean`: certificate json content
     - `issuer`: `object`: issuer information
     - `owner`: `boolean`: owner information
     - `events`: `boolean`: transfer events list
     - `arianeeEvents`: `boolean`: arianee events list
     - `advanced`: `object`: token recovery timestamp
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

### Read all the certificates owned by wallet


``` javascript
wallet.methods.getMyCertificates()
```

Get an array with all the certificates.

#### Parameter
1. `query` - `object`(optional) : Default : all blocks are fetched
     - `isRequestable`: `boolean`: certificate is transferable with provided passphrase
     - `content`: `boolean`: certificate json content
     - `issuer`: `object`: issuer information
     - `owner`: `boolean`: owner information
     - `events`: `boolean`: transfer events list
     - `arianeeEvents`: `boolean`: arianee events list
     - `advanced`: `object`: token recovery timestamp
     - `getMessageSenders`: `boolean`: list of validated senders 
2. `verifyOwnership` - `boolean`(optional) : Verify the list of owned certificate in the blockchain (bypass the cache)

#### Result
`promise` returns `array`: an array with arianee certificate objects

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


> Check [Arianee links](arianee-links) standard

***

### Create a request ownership link 
```
ArianeeWallets.methods.createRequestOwnershipLink(certificateId [, passphrase])
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


> Check [Arianee links](arianee-links) standard

***

    
### Test if a certificate is requestable
```
ArianeeWallets.methods.isCertificateOwnershipRequestable(certificateId, passphrase)
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
ArianeeWallets.methods.createCertificateProofLink(certificateId [, passphrase])
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



> Check [Arianee links](arianee-links) standard***
   
***

### Test a proof
```
ArianeeWallets.methods.isCertificateProofValid(certificateId, passphrase)
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


***
 
### Create an action proof link
```
ArianeeWallets.methods.createActionProofLink(url, certificateId [, passphrase])
```

Create an action proof link.

An action proof link is a typed link in a certificate external content.  [Check certificate schema doc](ArianeeProductCertificate-i18n#externalcontents-certificate-external-contents)

It can be used to anonymously authenticate a user on a specified link using an Arianee proof.

User needs to be the owner of specified certificate.

#### Parameter
1. `link` - `url`: an URL (this URL should implement test proof)
2. `certificateId` - `number`:  arianee certificate id
3. `passphrase` - `string`:  token proof passphrase. 

#### Result
`promise` returns `string`: A url with the proof append to the url

> This method performs a blockchain transaction. It costs Gas

#### Example
```
wallet.methods.createActionProofLink('https://myurl.com/mywebpage.html',3703454,'j2ukmnjd6weyz')

> https://myurl.com/mywebpage.html?proofLink=https://arian.ee/3703454,j2ukmnjd6weyz
```



***
 
### Create an Arianee Access Token
```
ArianeeWallets.methods.createCertificateArianeeAccessToken(certificateId)
```

Create an Arianee Access Token.

An Arianee Access Token is an Ethereum Web Token (or JWT using Ethereum algorythm signature). 
It is very close to a Arianee Proof but it does not require a blockchain transaction. It is made completly off the blockchain.

It can be used to anonymously authenticate a user.

User needs to be the owner of specified certificate to create a valid Arianee Access Token.

#### Parameter
1. `certificateId` - `number`:  arianee certificate id

#### Result
`string` : A Ethereum Web Token


#### Example
```
wallet.methods.createCertificateArianeeAccessToken(3703454)

> eyJ0eXAiOiJKV1QiLCJhbGciOiJFVEgifQ==.eyJpc3MiOiIweDQ5NjdmOTZBOTUyMDk2Q2IxODAyRDM3NWNCNzAzMTRmODcyOUE5NzciLCJzY29wZSI6ImFsbCIsImV4cCI6MTU5NTkxMzMyNDk1OSwiaWF0IjoxNTk1OTEzMDI0OTYwLCJjaGFpbiI6InRlc3RuZXQiLCJzdWIiOiJjZXJ0aWZpY2F0ZSIsInN1YklkIjozNzAzNDU0fQ==.0x1a13a3f9f47b31212bfca68b67e17053c9a95d68d356bb540c7f7af77682699316a34fdb44c07a744e8584a41a5beea5b86ba92d97a4ab03ec5598f50a3f81f21c

```


***
 
### Decode Arianee Access Token
```
ArianeeWallets.methods.decodeArianeeAccessToken(ArianeeAccessToken)
```

Decode an Arianee Access Token.


#### Parameter
1. `ArianeeAccessToken` - `string`:  An Arianee Access Token

#### Result
`Object` : Decoded Arianee Access Token


#### Example
```
wallet.methods.decodeArianeeAccessToken(eyJ0eXAiOiJKV1QiLCJhbGciOiJFVEgifQ==.eyJpc3MiOiIweDQ5NjdmOTZBOTUyMDk2Q2IxODAyRDM3NWNCNzAzMTRmODcyOUE5NzciLCJzY29wZSI6ImFsbCIsImV4cCI6MTU5NTkxMzMyNDk1OSwiaWF0IjoxNTk1OTEzMDI0OTYwLCJjaGFpbiI6InRlc3RuZXQiLCJzdWIiOiJjZXJ0aWZpY2F0ZSIsInN1YklkIjozNzAzNDU0fQ==.0x1a13a3f9f47b31212bfca68b67e17053c9a95d68d356bb540c7f7af77682699316a34fdb44c07a744e8584a41a5beea5b86ba92d97a4ab03ec5598f50a3f81f21c)

>
{ header: { typ: 'JWT', alg: 'ETH' },
  payload:
   { iss: '0x4967f96A952096Cb1802D375cB70314f8729A977',
     scope: 'all',
     exp: 1595913439007,
     iat: 1595913139007,
     chain: 'testnet',
     sub: 'certificate',
     subId: 3703454 },
  signature:
   '0x9d889236b78f92f9b32367415a99e055726b17c9605b335de63bbeb64c0fbc442ec24e83bf929afc620a801ad6a50d7d82280df2ac070ad845757b597d20d1ea1b' }

```


***
 
### create Action Arianee Access Token Link
```
ArianeeWallets.methods.createActionArianeeAccessTokenLink(url, certificateId)
```

Create an action Arianee Access Token link.
 
 An action Arianee Access Token link is a typed link in a certificate external content.  [Check certificate schema doc](ArianeeProductCertificate-i18n#externalcontents-certificate-external-contents)
 
 It can be used to anonymously authenticate a user on a specified link using an Arianee Access Token. It does not require a blockchain transaction.
 
 User needs to be the owner of specified certificate to be a valid Arianee Access Token.

#### Parameter
1. `link` - `url`: an URL
2. `certificateId` - `number`:  arianee certificate id

#### Result
`string` : url appended with Arianee Access Token


#### Example
```
const b=wallet.methods.createActionArianeeAccessTokenLink('http://www.authentificate-me.com',3703454);

>
```

***


### Is auth URL
```
ArianeeWallets.methods.isAuthURL(url)
```

Check if an URL is an authenticated url by either a proof or an Arianee access token.

#### Parameter
1. `link` - `url`: an URL with proof or Arianee Access Token. Pass the full url with query parmeters.

#### Result
`promise` returns `ExtendedBoolean`: 
- `isTrue`:`true` if proof is valid, `false` otherwise.
- `code` return code
- `message`return message
- `timestamp`return URL auth creation timestamp 
- `certificateId`return certificateId


#### Example
```
wallet.methods.isAuthURL('https://www.authentificate-me.com/us-fr/my-account/login/?arianee=1&arianeeAccessToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJFVEgifQ%3D%3D.eyJpc3MiOiIweDA5MTg4ZEMxNzA2NDMyNmVBMmYwRjgwZkIzNUNjRTAxQkEzNTRDOTMiLCJzY29wZSI6ImFsbCIsImV4cCI6MTYwMTI3NTEzOTEzNCwiaWF0IjoxNjAxMjc0ODM5MTM1LCJjaGFpbiI6InRlc3RuZXQiLCJzdWIiOiJjZXJ0aWZpY2F0ZSIsInN1YklkIjo3MTk0NTMzMX0%3D.0x97d9f7f1b440ec5ddc6d1029c59e395c8052f096ccdc7a5c59d2f29f8dc1acd01335b6ec78c9b277b1cf50139f6909418de36b36441e29e4490e0f847c32af341b')
>
{ isTrue: true,
  code: 'proof.token.valid',
  message: 'proof is valid',
  timestamp: 1601274961946,
  certificateId: 71945331 }

```

```
wallet.methods.isAuthURL('https://myurl.com/mywebpage.html?proofLink=https://arian.ee/3703454,j2ukmnjd6weyz')
>
{ isTrue: true,
  code: 'proof.token.valid',
  message: 'proof is valid',
  timestamp: 1601274961946,
  certificateId: 71945331 }

```

***


### Update certificate


```
ArianeeWallets.methods.updateCertificate(data)
```

Updates an arianee certificate. The certificate is not really updated. The original imprint is still in the blockchain. Another contract "update" manage all updates of a certificate. Certificate retrievable manages automatically updates. 

#### Parameter
1. `data` - `object`:  certificate creation data object
     - `certificateId`- `number` : arianee token id. Random if left empty
     - `content` - `object` (optional) : certificate content object (json)
     - `imprint` - `string` (optional): certificate imprint.  (either content or hash need to be provided)


#### Result
`promise` returns `object`: The receipt of the blockchain transaction 


> This method performs a blockchain transaction. It costs 1 update credit and Gas



#### Example
```
// fetch certificate content
var certificate = await fetch("https://cert.arianee.org/cert/sampleCert.json");
var content = await certificate.json();

// Create a certificate based on a self hosted json  
await wallet.methods.updateCertificate({
     certificateId: 1234567,
     content:content})      
     .then((i) => {
          ...
          
    })
     .catch(i => console.log("Updating certificate : error ", JSON.stringify(i)));
```
***


### Update certificate and store content in RPC server


```
ArianeeWallets.methods.updateAndStoreCertificate(data)
```

Updates an arianee certificate. The certificate is not really updated. The original imprint is still in the blockchain. Another contract "update" manage all updates of a certificate. Certificate retrievable manages automatically updates. 

#### Parameter
1. `data` - `object`:  certificate creation data object
     - `certificateId`- `number` : arianee token id. Random if left empty
     - `content` - `object` (optional) : certificate content object (json)
     - `imprint` - `string` (optional): certificate imprint.  (either content or hash need to be provided)
2. `url` - `string`: url of RPC Server. Usually, it is the url of issuer's RPC Server 

#### Result
`promise` returns `object`: The receipt of the blockchain transaction 


> This method performs a blockchain transaction. It costs 1 update credit and Gas



#### Example
```
// fetch certificate content
var certificate = await fetch("https://cert.arianee.org/cert/sampleCert.json");
var content = await certificate.json();

// Create a certificate based on a self hosted json  
await wallet.methods.updateCertificate({
     certificateId: 1234567,
     content:content},
     'https://arianee.cleverapps.io/testnet/rpc'
     )      
     .then((i) => {
          ...
          
    })
     .catch(i => console.log("Updating certificate : error ", JSON.stringify(i)));
```
***


### Store content of a certificate update


```
ArianeeWallets.methods.storeUpdateContentInRPCServer(certificateId, content, RPCURL)
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
await wallet.methods.storeUpdateContentInRPCServer(
       1234,
     content,
    'https://arianee.cleverapps.io/testnet/rpc'
    )      
```
***



### Certificate owner


```
ArianeeWallets.methods.ownerOf(certificateId)
```

Get ownership information about a certificate

#### Parameter
1. `certificateId` - `number`:  Certificate Id of Arianee Certificate

#### Result
`promise` returns `object`:

#### Example
```

// Get ownership info of a Arianee certificate
await wallet.methods.ownerOf(
       1234
    )      

>
{
  address: '0xbEa4D632da6aBE9b85780dC0A43bF6C2777C466E', // certificate owner address
  hasOwner: true, // this certificate has an owner
  isOwner: true // current wallet is the owner
}
```
***


### Certificate transfer

```
ArianeeWallets.methods.transfer(certificateId, publicAddress)
```

Transfer a certificate to an address

#### Parameter
1. `certificateId` - `number`:  Certificate Id of Arianee Certificate
3. `publicAddress` - `string`: the public address of certificate receiver


#### Result
`promise` returns `object`:

#### Example
```

  try {
    transfer  = await wallet.methods.transfer(certificateId, '0x5BC8da7dE68c1af47D329B14ADdBf1d7547A1747');
  }
  catch(e) {
    console.log('error',e)
  }

  console.log(transfer);


>
{
  address: '0xAF561f54CDd4A2cAD2aa5aD70f87358c2399626b',
  hasOwner: true,
  isOwner: true
}
{
  receipt: {
    blockHash: '0x3385b04da2e85d8dcef310246431fad06db3295caaba68070e8fc9d8a1330e04',
    blockNumber: 20992104,
    contractAddress: null,
    cumulativeGasUsed: 119452,
    from: '0xaf561f54cdd4a2cad2aa5ad70f87358c2399626b',
    gasUsed: 75692,
    logs: [ [Object], [Object] ],
    logsBloom: '0x00000000000000080000000000000000000000008000000000000004000000000000000000000000000000000000000000000000000000000000000010000000000000000010001000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000010000020000000000020000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000001000000000000000002000002000000000000000000000000000000100000000000000000000000000040000000000000000000000000000000000004020010000200000000000000',
    status: true,
    to: '0x512c1fcf401133680f373a386f3f752b98070bc5',
    transactionHash: '0xeb070b58361500e316c1867d0205a01536c4035382391359bb19d56df340259b',
    transactionIndex: 1
  }
}



//In case of error (transfer initiated by non-owner)

Error: This wallet is not the owner of 904554486
  receipt: {
    blockHash: '0x3385b04da2e85d8dcef310246431fad06db3295caaba68070e8fc9d8a1330e04',
    blockNumber: 20992104,
    contractAddress: null,
    cumulativeGasUsed: 119452,
    from: '0xaf561f54cdd4a2cad2aa5ad70f87358c2399626b',
    gasUsed: 75692,
    logs: [ [Object], [Object] ],
    logsBloom: '0x00000000000000080000000000000000000000008000000000000004000000000000000000000000000000000000000000000000000000000000000010000000000000000010001000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000010000020000000000020000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000001000000000000000002000002000000000000000000000000000000100000000000000000000000000040000000000000000000000000000000000004020010000200000000000000',
    status: true,
    to: '0x512c1fcf401133680f373a386f3f752b98070bc5',
    transactionHash: '0xeb070b58361500e316c1867d0205a01536c4035382391359bb19d56df340259b',
    transactionIndex: 1
  }
}

```
***