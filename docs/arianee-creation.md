---
title: Create a Passport
sidebar_label: Create a Passport
---

## What is the Create feature ?

The Create feature enables a Blockchain wallet, from a Brand or a third party for example, to create a Passport on the Blockchain.
By design, a Passport belongs to one and only one Owner (a Blockchain wallet) at a time. The issuer of a Passport is also its first owner. 

## Creation workflow

The creation request is initiated by a Blockchain Wallet, usually from a Brand or a third party. The issuer of a Passport is also its first owner. 
Since a Passport including content makes more sense, multiple information can be specified when creating a Passport. Content of a Passport may include : name, description, serial numbers, pictures, videos, links, information on supply chain, certifications, etc.
Once created, the imprint of the Passport and the transaction details relating to the creation can be seen on the Blockchain. Also, each Passport has a unique identification number (Arianee ID) recorded on the Blockchain. 
A Passport is considered authentic if it meets specific criteria. To learn more about this, please refer to the [About Passport authenticity](https://docs.arianee.org/docs/arianee-decentralized#about-certificate-authenticity) section.
To dig into the technical details, please refer to [the Passport SDK section](https://docs.arianee.org/docs/arianee-js-certificate) or [the Arianee Passport Schema](https://docs.arianee.org/docs/ArianeeProductCertificate-i18n).

## About Identification technology & pairing 

The issuer of a Passport might want to share the content of this Passport with customers or transfer ownership of the Passport to the Owner of the related product.
These use cases require digital features: the ability to read a Passport (more about this [here](../docs/arianee-proof-of-ownership)) or transfer a Passport (more about this [here](../docs/arianee-transfer)) 
These use cases also require an identification technology to link a product to its digital Passport. Multiple identification technology may be used:

- Stand alone or embedded QR code
- Stand alone or embedded NFC 
- Stand alone or embedded Beacon (Bluetooth) 
- Stand alone or embedded PUF (Physical Unclonable Functions)
- Visual Fingerprint recognitionLinks (URL) in email, sms, …

The full workflow to create Passports and pair them with the identification technology chosen depends on the product type as well as the manufacturing and distribution processes used by the issuer of the Passports.

## Best Practices

Passport creation should happen at the latest moment before it reaches the consumer: 

- To limit IT risks relating to the execution of multiple transactions for a Passport
- To ensure the clearest history on Blockchain for a Passport
- To limit fees relating to the management of a Passport

Passports with exhaustive content will improve customer impact & Business intelligence capabilities of the issuer of a Passport

The right interfaces and infrastructure should be used to create Passports:

- For security & reliability reasons
- To build exhaustive Passports
- To store the content of the Passport
- To ensure security & privacy of Blockchain transactions

## Creation fees

The creation of a Passport has a stable price in fiat currency of 0.1 USD payable only in Aria (the Arianee protocol cryptocurrency) by the issuer of the Passport.
Extra fees may apply if the Passport issuer outsources the creation of Passports to a third party or uses an external software to Create its Passports.

## About interfaces

The creation can be done using the API integration with ArianeeJS library or directly at the Blockchain level interacting with smart contracts.The Passport issuer can develop its own interface to Create Passports, outsource the development to a third party or he can use an external interface such as the Passport Management Platform.

## About data storage

The content of the Passport can be stored on **any server, most often the Brand server** **hosting the Passport Management Platform** which issued the Passport. 
The imprint of the Passport and the transaction details relating to the creation can be seen on the Blockchain. 

