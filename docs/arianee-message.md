---
title: Message to Passport
sidebar_label: Message to Passport
---

## **What is the Message feature?**

The Message feature enables an authorized Blockchain wallet, usually a Brand or a third party, to interact with the owner through the Passport. 
By design, a Message is linked to a Passport AND a Blockchain Wallet (the current owner of the Passport).

## **Message workflow**

Messages are initiated by a Blockchain Wallet, usually from a Brand or a third party. 
Only whitelisted Blockchain Wallets can send a Message to a Passport. The Whitelist includes the Passport issuer, and 3rd party wallets who linked an Event to the Passport which has been accepted.

A Message request is composed by:

- Its content: title, description, medias, links…the ArianeeId of the Passport
- Information related to the issuer of the Message

Only the Passport issuer, the Message issuer and the current Owner of a Passport can access the content.
The receiver of the Message can not send back a Message but the Message schema allows the issuer to include links in order to collect feedback.
Since the Message is linked to a Passport AND a Blockchain Wallet (the current owner of the Passport), if the Passport is transferred to another Owner the new Owner will not have access to the Message.

To dig into the technical details, please refer to [the Message SDK section](https://docs.arianee.org/docs/arianee-js-messaging).

## **Best practices**

Messages with exhaustive content will improve customer impact.
The right interfaces and infrastructure should be used to create Messages:

- For security & reliability reasons
- To build exhaustive Messages
- To store the content of the Message

The Message is different from an Update and an Event. Recommended use cases for the Message feature are:

- Provide useful information related to the Product linked to the Passport (eg Service reminder)
- Request a proof of ownership or activity related to the product (eg “please confirm as the owner of the Passport that you want your Product to be serviced”)
- Start or pursue a customer journey following the activation of a Service from the Passport

## **Message fees**

The creation of a Message has a stable price in fiat currency of 0.1 USD payable only in Aria (the Arianee protocol cryptocurrency) by the issuer of the Message..
Extra fees may apply if the Message issuer outsources the creation of Messages to a third party or uses an external software to Create its Messages.

## **About interfaces**

The Message creation can be done using the API integration with ArianeeJS library or directly at the Blockchain level interacting with smart contracts and the passport issuer Arianee privacy gateway
The Message issuer can develop its own interface, outsource the development to a third party or it can use an external interface such as the Passport Management Platform.
Owners may consult the Messages in the Passport on the .Wallet application developed by Arianee or any compatible interface.

## **About data storage**

The content of the message can be stored on **any server, most often the Brand server** **hosting the Passport Management Platform** which issued the message 
The imprint of the Message and the transaction details relating to the creation can be seen on the Blockchain. 