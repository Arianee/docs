---
title: Passport History
sidebar_label: Passport History
---

##  **What is the History feature**

The Passport History is a list of time stamped transactions recorded on the Blockchain and linked to a Passport. Each Blockchain transaction relating to a Passport can be included in its History.
There are two types of events:

- Blockchain Event: public events relating to blockchain transactions (e.g. creation of a Passport, transfer..)
- [Arianee Event](../docs/arianee-event): private events with custom content relating to a specific Passport (e.g. sell-out event)

## **History workflow**

To access the History of a Passport, the user needs to provide:

- The ArianeeID, aka PassportID, of the Passport
- The right level of permission to access the content of Arianee Events included in the History of the Passport

To dig into the technical details, please refer to [the Certificate SDK section](https://docs.arianee.org/docs/arianee-js-certificate) or [the Arianee Certificate Schema](https://docs.arianee.org/docs/ArianeeProductCertificate-i18n).

## **Best practices**

History with an exhaustive list of Events and transactions linked to a Passport will improve customer impact & Business intelligence capabilities of the issuer of a Passport.

Recommended use cases for using the History feature of a Passport are:

- Deployment of an application for customers to access Passport content & details
- Research on the Passport lifecycle by the issuer of a Passport or an authorized 3rd party

## **History fees**

The creation of the History of a Passport does not come with a Blockchain transaction. Access to the History of a Passport is free.

## **About interfaces**

The History of a Passport can be accessed using the API integration with ArianeeJS library or directly at the Blockchain level.
Owners may consult the History of the Passport on the .Wallet application developed by Arianee or any compatible interface.

## **Link with Event feature**

Events may appear in the Passport History. 
To learn more about Events, please refer to [the Event section](https://docs.arianee.org/docs/arianee-event)