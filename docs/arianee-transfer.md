---
title:Transfer
sidebar_label:Transfer
---

## What is the Transfer feature ?

By design, a Certificate belongs to one and only one Owner (a Blockchain wallet) at a time.
The Transfer feature enables the transfer of a Certificate from its Owner (a Blockchain wallet) to a new Owner (another Blockchain wallet). 

## Transfer workflow

The transfer request is initiated by the target new Owner and can be executed only if he / she is able to provide the right information, including the Arianee ID of the Certificate and a password. Only the current Owner of a Certificate can produce the password required by the new Owner to claim ownership of the Certificate.
Usually, the current Owner generates a link to transfer the Certificate & share it with the target new Owner. The new Owner uses the link to claim the Certificate & execute the transfer transaction on the Blockchain.
A transfer cannot be reversed once executed.
There is one exception to this workflow. The issuer of a Certificate can transfer the Certificate from a current Owner to its Blockchain wallet. Specific conditions apply for this kind of transfer, usually initiated following the return of a product by its Owner.
To dig into the technical details, please refer to [the Certificate SDK section](https://docs.arianee.org/docs/arianee-js-certificate) or [the Arianee Certificate Schema](https://docs.arianee.org/docs/ArianeeProductCertificate-i18n).

## Best Practices

The Transfer features should be used when the ownership of the relating product changes, some examples include: 

- The product is sold from one to another
- The product is given from one to another
- The Owner decides to use another Blockchain wallet to hold his / her Certificates
- The Certificate should be transferred following a claim to an insurance in order to be compensated 

It is recommended to use a Certificate as custody for a selling transaction and transfer the Certificate only once payment has been processed.

## Transfer fees

At the Protocol level, the Transfer is free. Free for the issuer of the Certificate, the current Owner and the target new Owner 
Extra fees may apply if the Certificate issuer outsources the Transfer execution to a third party or uses an external software to initiate the transfer of its Certificates.
At the Blockchain level, the gas fees of a Transfer transaction are paid by the Arianee Protocol.

## About interfaces

The creation can be done using the API integration with ArianeeJS library or directly at the Blockchain level interacting with smart contracts.
The Certificate issuer can develop its own interface to Transfer Certificates, outsource the development to a third party or it can use an external interface such as the Certificate Management Platform.

## About data storage

The content of the Certificate can be stored on **any server, most often the Brand server** **hosting the Certificate Management Platform** which issued the Certificate. 
The imprint of the Certificate and the transaction details relating to the Transfer can be seen on the Blockchain.

