---
title: Arianee Privacy Gateway
sidebar_label: Arianee Privacy Gateway
---


In this section, methods related to content delivery in a private way are covered.

A arianee certificate content could be a plain JSON file self hosted and requestable as a GET ressource.
But in that case, the certificate content is completely public. 

Very often, brands want to be able to make their certificate content private but still transferable and sharable.

Thanks to the Arianee Protocol, it's possible. But of course, there's the need of what we call "Arianee Privacy Gateway" which handle all checks to ensure that a request is authorized to access content.

An Arianee Privacy Gateway implementation is based on JSON RPC, and should expose few methods.

We developped a middleware to manage all the dirty things for you. 
You just have to connect that middleware to your content warehouse and you don't have to worry if security is well implemented or not. The middleware handle it for you.

This middleware name is : **arianee-rpc-server**

You can check the repo here : https://github.com/Arianee/arianee-rpc-server/

Or the NPM Package : https://www.npmjs.com/package/@arianee/arianee-rpc-server


## Installation

We recommend you employ the certification module as an NPM package in your application.

``` 
$ npm i --save @arianee/arianee-rpc-server
```

To import the package inside your app
``` 
import { ArianeeRPCCustom } from "@arianee/arianee-rpc-server";
import {NETWORK} from "@arianee/arianeejs";
const arianeeRPC=new ArianeeRPCCustom(NETWORK.mainnet);
```


## How to use

This gateway is a serverside application.

You need to use a node web server and implement arianee-rpc-server.

You need to implement methods and write your own code to connect to your content warehouse

``` 
const certificateContent=(certificateId)=> {

    // Connect to you database / filesystem / document warehouse...
    // Locate certificate content referenced with id : certificateId
    // grab it
    // store it into JsonCertificateContent variable

    Promise.resolve(JsonCertificateContent);

}

arianeeRPC.setCertificateContent(certificateContent);


const rpcServer = arianeeRPC.build();
 
app.post("/rpc", (req, res, next) => rpcServer(req, res, next));
// Or shorter
// app.post("/rpc",rpcServer);
``` 

> The endpoint needs to be defined into the brand identity JSON as endpoint RPC key. 



## Basic implementation using express

```
import { ArianeeRPCCustom } from "../arianeeRPCServer";
import {NETWORK} from "@arianee/arianeejs/dist/src";

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

var bodyParser = require("body-parser");

// Certificate content array
const certificatesDB={};

// Events content array
const eventsDB={}

const SessionDBRPC = (network=NETWORK.arianeeTestnet)=> new ArianeeRPCCustom(network)
    .setCertificateContentMethods(
        (certificateid:string)=>{
      return Promise.resolve(certificatesDB[certificateid])
    },
        (certificateid:string, data)=>{
      certificatesDB[certificateid] = data;
      return Promise.resolve();
    })
    .setEventContentMethods(
        (certificateid)=>{
      return Promise.resolve(eventsDB[certificateid])
    },
        (certificateid:string, data)=>{
            eventsDB[certificateid] = data;
      return Promise.resolve();
    })
  .build();

const arianeeRpcServer = SessionDBRPC();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/rpc", (req, res, next) => arianeeRpcServer(req, res, next));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

```



## Methods list




### setCertificateContent


This method can implements two custom methods : 
- One for reading certificate content
- One for storing certificate content

```
arianeeRPC.setCertificateContent(promise certificateRead(certificateId), promise certificateCreate(certificateId, content) );
```

#### Reading certificate
```
(certificateId:string)=>{

      // This code is called only is the request is allowed to read certificate content
      // You need to use certificateId reference to read certificate content into your database / other storage system
      // and resolve the content

      return Promise.resolve(certificateContent)
    }
```

#### Creating certificate
```
(certificateId:string, content:string)=>{

      // This code is called only if the request is allowed to store certificate content
      // You need to use certificateId reference to store certificate content into your database / other storage system
      // and resolve the promise

      return Promise.resolve()
    }
```




### setEventContentMethods


This method can implements two custom methods : 
- One for reading event content
- One for storing event content

```
arianeeRPC.setCertificateContent(promise fetchEventContent(eventId), promise createEvent(eventId, content) );
```

#### Reading event
```
(eventId:string)=>{

      // This code is called only is the request is allowed to read event content
      // You need to use eventId reference to read event content into your database / other storage system
      // and resolve the content

      return Promise.resolve(eventContent)
    }
```

#### Creating event
```
(eventId:string, content:string)=>{

      // This code is called only if the request is allowed to store event content
      // You need to use eventId reference to store event content into your database / other storage system
      // and resolve the promise

      return Promise.resolve()
    }
```