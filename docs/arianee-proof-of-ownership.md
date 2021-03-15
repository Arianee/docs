---
title: Proof of ownership
sidebar_label: Proof of ownership
---

## What is the Proof of Ownership feature ?

By design, a Certificate belongs to one and only one Owner (a Blockchain wallet) at a time.
The Proof of Ownership feature enables the Owner of a Certificate to share access to this Certificate with someone else with a read permission only. The access provided also carries a timestamped Proof of Ownership so that the reader of the Certificate knows when the Proof of Ownership link was issued.

## Proof of Ownership workflow

The Proof, including a password (Proofkey), is issued by the current Owner of a Certificate. Only the current Owner of a Certificate can produce the password required by someone else to read the Certificate.
Usually, the current Owner generates a link from the Proof and shares it with another user. The other user uses the link to read the Certificate & the time when the Proof was issued on the Blockchain.
The Password generated from a Proof is valid until the Certificated is Transferred or another Proof is generated .
It should be noted that the Certificate issuer is always able to read the Certificate as well thanks to another password (viewkey) created when the Certificate is issued.
To dig into the technical details, please refer to [the Certificate SDK section](https://docs.arianee.org/docs/arianee-js-certificate) or [the Arianee Certificate Schema](https://docs.arianee.org/docs/ArianeeProductCertificate-i18n).

## Best Practices

The Proof feature should be used by Owners when they need to Prove their ownership or Share the content of their Certificates, some examples include:

- access to a service or event based on the Ownership of a certificate
- share with someone else the content or the ownership of a certificate 

## Proof of Ownership fees

At the Protocol level, the Proof of Ownership is free. Free for the issuer of the Certificate, the current Owner and the receiver. 
At the Blockchain level, the gas fees of a Proof transaction are paid by the Arianee Protocol.

## About interfaces

The Proof can be issued using the API integration with ArianeeJS library or directly at the Blockchain level interacting with smart contracts.
For Proof initiated by the Certificate issuer, the Certificate issuer can develop its own interface to provide a Proof, outsource the development to a third party or it can use an external interface such as the Certificate Management Platform.
For Proof initiated by another Owner than the Certificate issuer, the Certificate issuer can develop its own interface to let Owners generate a Proof of Ownership for their Certificates or outsource the development to a third party for such interface. Owners can also use any Arianee compliant interface to generate a Proof of Ownership for their Certificates, the .Wallet by Arianee mobile application for example.

## About data storage

The content of the Certificate can be stored on **any server, most often the Brand server** **hosting the Certificate Management Platform** which issued the Certificate. 
The imprint of the Certificate and the transaction details relating to the Proof can be seen on the Blockchain. 

