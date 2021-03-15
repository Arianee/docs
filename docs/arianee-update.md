---
title: Update
sidebar_label: Update 
---

## What is a Certificate Update ?

The Update feature enables the issuer of a Certificate to provide and record a new version of the content associated with a Certificate already existing on the Blockchain. 
Reasons to use the Update are numerous. They include: information was missing or badly recorded when the Certificate was issuedinformation within the Certificate is no more accurate (eg description, links, etc.)additional information is available for the Certificate (eg translation in a new language)

## Update workflow

The issuer of a Certificate can Update this Certificate needs to know:

- the ArianeeID, aka CertificateID, of the Certificate to Update
- the private key of the issuer to sign the transaction
- the new content (file compliant with the Arianee Certificate schema) 

The issuer of a Certificate can Update this Certificate at any time, even if the issuer does not own the Certificate anymore (it has been claimed by someone else, most often a consumer).
All the content of a Certificate can be updated (name, serial number, description, medias, etc.) except for its ArianeeID.
In theory, all versions of a Certificate remain available to stakeholders with the right level of permission (and technical knowledge!). 
In practice, applications and software dedicated to consumers tend to display only the last version of the content, that is the Updated version. In fact, best practices for applications and software dedicated to consumers include the display of the Updated version of the Certificate as soon as it has been updated.

## Best Practices

Certificates creation should happen at the latest moment before it reaches the consumer: 

- to limit IT risks relating to the execution of multiple transactions for a Certificate
- to ensure the clearest history on Blockchain for a Certificate
- to limit fees relating to the management of a Certificate

The Update is different from an [Event](../docs/arianee-event) and a [Message](../docs/arianee-message) . Depending on his goal, the issuer of a Certificate should select wisely the feature to use. Recommended use cases for the Update feature are:

- information was missing or badly recorded when the Certificate was issued
- information within the Certificate is no more accurate (eg description, links, etc.)
- additional information is available for the Certificate (eg translation in a new language)

## Updates fees

The Update has a stable price in fiat currency of 0.1 USD payable only in Aria (the Arianee protocol cryptocurrency) by the issuer of the Certificate.
Extra fees may apply if the Certificate issuer outsources the Update execution to a third party or uses an external software to Update its certificates.

## About interfaces

The Update can be done using the API integration with ArianeeJS library or directly at the Blockchain level interacting with smart contracts.The Certificate issuer can develop its own interface to Update Certificates, outsource the development to a third party or he can use an external interface such as the Certificate Management Platform.
Owners may consult the Updated Certificate on the .Wallet application developed by Arianee or any compatible interface.

## About data storage

The content of the Certificate can be stored on **any server, most often the Brand server** **hosting the Certificate Management Platform** which issued the Certificate. The imprint of the Certificate and the transaction details relating to the Update can be seen on the Blockchain. 

