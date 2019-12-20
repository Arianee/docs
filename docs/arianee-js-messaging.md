---
title: Messaging
sidebar_label: Messaging
---


In this section, methods related to messaging management are covered

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

