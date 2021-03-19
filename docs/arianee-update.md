---
title: Update a Passport 
sidebar_label: Update a Passport 
---

## What is a Passport Update ?

The Update feature enables the issuer of a Passport to provide and record a new version of the content associated with a Passport already existing on the Blockchain. 
Reasons to use the Update are numerous. They include: information was missing or badly recorded when the Passport was issuedinformation within the Passport is no more accurate (eg description, links, etc.)additional information is available for the Passport (eg translation in a new language)

## Update workflow

The issuer of a Passport can Update this Passport needs to know:

- the ArianeeID, aka PassportID, of the Passport to Update
- the private key of the issuer to sign the transaction
- the new content (file compliant with the Arianee Passport schema) 

The issuer of a Passport can Update this Passport at any time, even if the issuer does not own the Passport anymore (it has been claimed by someone else, most often a consumer).
All the content of a Passport can be updated (name, serial number, description, medias, etc.) except for its ArianeeID.
In theory, all versions of a Passport remain available to stakeholders with the right level of permission (and technical knowledge!). 
In practice, applications and software dedicated to consumers tend to display only the last version of the content, that is the Updated version. In fact, best practices for applications and software dedicated to consumers include the display of the Updated version of the Passport as soon as it has been updated.

## Best Practices

Passports creation should happen at the latest moment before it reaches the consumer: 

- to limit IT risks relating to the execution of multiple transactions for a Passport
- to ensure the clearest history on Blockchain for a Passport
- to limit fees relating to the management of a Passport

The Update is different from an [Event](../docs/arianee-event) and a [Message](../docs/arianee-message) . Depending on his goal, the issuer of a Passport should select wisely the feature to use. Recommended use cases for the Update feature are:

- information was missing or badly recorded when the Passport was issued
- information within the Passport is no more accurate (eg description, links, etc.)
- additional information is available for the Passport (eg translation in a new language)

## Updates fees

The Update has a stable price in fiat currency of 0.1 USD payable only in Aria (the Arianee protocol cryptocurrency) by the issuer of the Passport.
Extra fees may apply if the Passport issuer outsources the Update execution to a third party or uses an external software to Update its Passports.

## About interfaces

The Update can be done using the API integration with ArianeeJS library or directly at the Blockchain level interacting with smart contracts.The Passport issuer can develop its own interface to Update Passports, outsource the development to a third party or he can use an external interface such as the Passport Management Platform.
Owners may consult the Updated Passport on the .Wallet application developed by Arianee or any compatible interface.

## About data storage

The content of the Passport can be stored on **any server, most often the Brand server** **hosting the Passport Management Platform** which issued the Passport. The imprint of the Passport and the transaction details relating to the Update can be seen on the Blockchain. 

