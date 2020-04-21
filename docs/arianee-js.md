---
title: ArianeeJS library
sidebar_label: ArianeeJS library
---

ArianeeJS is the first official SDK to interact with the Arianee Protocol

ArianeeJS works on NodeJs and browser.

If you want to play straight away with the library, a **[live demo](livedemo)** is available directly within your browser


If you want to dig deeper into arianeeJS, please 
[check ArianeeJS full  documentation](arianeeJS-SDK/README)



## Installation

We recommend you employ the certification module as an NPM package in your application.

``` 
$ npm i --save @arianee/arianeejs 
```

To import the package inside your app
``` 
import { Arianee } from '@arianee/arianeejs'
```


If you want to use it directly in your browser with javascript, you can include  
``` 
<script src="https://unpkg.com/@arianee/arianeejs@latest/browser/bundle.js">
</script> 
``` 
    
***
***


This code is for demonstration purpose so we can use ``@latest`` bundle. In real world, you should always add SRI (sub-resource integrity) as recommended by W3C: https://www.w3.org/TR/SRI/

```html
<script src="https://unpkg.com/@arianee/arianeejs@1.8.0/browser/bundle.js" 
integrity="sha384-Ay7oXTEIhZSeW8AFjocYolR96Vl14omuBh2PcTiCuO5tkU1B6NOGqHzZwwVT3XC+" 
crossorigin="anonymous"></script>
```

## Issues and bugs

If you have an issue or you found a bug, please open an issue on our github repo: https://github.com/Arianee/arianeeJS/issues
Try to give us piece of code and the most details you can so we can reproduce your issue easily, and the help you faster.



## Initialize

First you need to instantiate arianeeJS 
``` 
new Arianee();
``` 

``` 
Arianee.init([networkName]);
``` 
#### Parameter
1. `networkName` - `string`(optional):  The network to use ("mainnet"|"testnet") (Defaults to `"testnet"`)
2. `arianeeCustomConfiguration` - `object`(optional) :  some options can be overriden
     - `walletReward`: `object<{address:string>` (optional): address of wallet to be rewarded
     - `brandDataHubReward`: `object<{address:string>` (optional): address of BDH to be rewarded
     - `httpProvider`: `provider` (optional): provider as defined by web3js
     - `transactionOptions`: `object<gas:number, gasPrice:any>` : transaction options
     - `deepLink`: `string`: deeplink to be used by arianeejs to create deeplink
     
#### Result
`promise` returns `object`: ArianeeWalletBuilder object - The arianee instance with the choosen network
`
>*Be careful. init is asynchronous. You need to use await or a promise.*

#### Example
``` 
const arianeeLib = new Arianee();
const arianee = await arianeeLib.init("testnet");
``` 

***
***

## setDefaultQuery

First you need to instantiate arianeeJS 
``` 
new Arianee();
``` 

``` 
Arianee.setDefaultQuery([ConsolidatedCertificateRequest]);
``` 
#### Parameter
1. `value` - `ConsolidatedCertificateRequest`:  The network to use ("mainnet"|"testnet") (Defaults to `"testnet"`)

#### Result
`Arianee` returns `object`: Arianee object - The arianee instance

#### Example
``` 
const arianee = new Arianee()
    .setDefaultQuery({content:true})
    .init();
``` 

