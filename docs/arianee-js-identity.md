---
title: Identity
sidebar_label: Identity
---


In this section, methods related to identity management are covered

### Read identity


```
ArianeeWallets.methods.getIdentity(address)
```

Get information related to a registered identity on Arianee Network

#### Parameter
1. `address` - `address`:  identity address


#### Result
`promise` returns `object`: an Arianee Identity object



#### Example
```

// Read identity information  
wallet.methods.getIdentity('0x5f89d20c4a88FC2479b08522d5adD0b605001E3e').then((data)  => {
    console.log(data);
})

> { data:
   { '$schema':
      'https://cert.arianee.org/version1/ArianeeBrandIdentity-i18n.json',
     name: 'Arianee Live Demo',
     companyName: 'Arianee Live Demo',
     arianeeMembership: 'not_member',
     pictures: [ [Object] ],
     rpcEndpoint: 'https://bdhalex-826d5.firebaseapp.com/rpc' },
  isAuthentic: true,
  isApproved: true,
  address: '0x5f89d20c4a88FC2479b08522d5adD0b605001E3e' }
```
***

### Read identity using shortcode


```
ArianeeWallets.methods.getIdentitByShortcode(shortcode)
```

Get information related to a registered identity on Arianee Network based on shortcode.

Shortcode is a short version of identity public address.

#### Parameter
1. `shortcode` - `string`:  identity address shortcode


#### Result
`promise` returns `object`: an Arianee Identity object



#### Example
```

// Read identity information  
wallet.methods.getIdentitByShortcode('0xb908B6').then((data)  => {
    console.log(data);
})

> { data:
   { '$schema':
      'https://cert.arianee.org/version1/ArianeeBrandIdentity-i18n.json',
     name: 'Arianee Live Demo',
     companyName: 'Arianee Live Demo',
     arianeeMembership: 'not_member',
     pictures: [ [Object] ],
     rpcEndpoint: 'https://bdhalex-826d5.firebaseapp.com/rpc' },
  isAuthentic: true,
  isApproved: true,
  address: '0x5f89d20c4a88FC2479b08522d5adD0b605001E3e' }
```
***

### Create identity

*Still in progress* or you can use smart contract method directly


