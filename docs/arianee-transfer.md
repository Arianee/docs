---
title:Transfer of Passport
sidebar_label:Transfer of Passport
---

## What is the Transfer feature ?

By design, a Passport belongs to one and only one Owner (a Blockchain wallet) at a time.
The Transfer feature enables the transfer of a Passport from its Owner (a Blockchain wallet) to a new Owner (another Blockchain wallet). 

## Transfer workflow

The transfer request is initiated by the target new Owner and can be executed only if he / she is able to provide the right information, including the Arianee ID of the Passport and a password. Only the current Owner of a Passport can produce the password required by the new Owner to claim ownership of the Passport.
Usually, the current Owner generates a link to transfer the Passport & share it with the target new Owner. The new Owner uses the link to claim the Passport & execute the transfer transaction on the Blockchain.
A transfer cannot be reversed once executed.
There is one exception to this workflow. The issuer of a Passport can transfer the Passport from a current Owner to its Blockchain wallet. Specific conditions apply for this kind of transfer, usually initiated following the return of a product by its Owner.
To dig into the technical details, please refer to [the Passport SDK section](https://docs.arianee.org/docs/arianee-js-certificate) or [the Arianee Passport Schema](https://docs.arianee.org/docs/ArianeeProductCertificate-i18n).

## Best Practices

The Transfer features should be used when the ownership of the relating product changes, some examples include: 

- The product is sold from one to another
- The product is given from one to another
- The Owner decides to use another Blockchain wallet to hold his / her Passports
- The Passport should be transferred following a claim to an insurance in order to be compensated 

It is recommended to use a Passport as custody for a selling transaction and transfer the Passport only once payment has been processed.

## Transfer fees

At the Protocol level, the Transfer is free. Free for the issuer of the Passport, the current Owner and the target new Owner 
Extra fees may apply if the Passport issuer outsources the Transfer execution to a third party or uses an external software to initiate the transfer of its Passports.
At the Blockchain level, the gas fees of a Transfer transaction are paid by the Arianee Protocol.

## About interfaces

The creation can be done using the API integration with ArianeeJS library or directly at the Blockchain level interacting with smart contracts.
The Passport issuer can develop its own interface to Transfer Passports, outsource the development to a third party or it can use an external interface such as the Passport Management Platform.

## About data storage

The content of the Passport can be stored on **any server, most often the Brand server** **hosting the Passport Management Platform** which issued the Passport. 
The imprint of the Passport and the transaction details relating to the Transfer can be seen on the Blockchain.

