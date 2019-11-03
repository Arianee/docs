---
id: ArianeeJS
title: ArianeeJS library
sidebar_label: ArianeeJS library
---

ArianeeJS is the first official SDK to interact with the Arianee Protocol


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

#### Result
`promise` returns `object`: ArianeeWalletBuilder object - The arianee instance with the choosen network
`
>*Be careful. init is asynchronous. You need to use await or a promise.*

#### Example
``` 
const arianeeLib = new Arianee();
const arianee = await arianeeLib.init("testnet");
``` 

