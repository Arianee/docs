---
title: Event
sidebar_label: Event
---

## What is an event? 

The event feature enables Brands and third parties to enrich a certificate. Use cases are numerous, it could be a watch or a car retailer servicing and adding this operation with details on the product certificate.
Technically speaking, **an event is an immutable event on a certificate.** It can be issued by the Brand who issued the certificate or by any third party.

## Event workflow

First, the entity issuing the event uses a certificate ID to request inserting this event on the certificate. The certificate ID is usually provided by the owner of the Certificate (by scanning a QR code or an NFC tag for example).
Second, the event must be approved to be inserted on the certificate: 

- Case A : the certificate issuer approves the event (it can be automated based on a trusted list of third parties provided by the Brand). 
- Case B : the Owner of the certificate approves the event.

Once issued, approved and inserted on a certificate, an event might be destroyed if this option is deemed appropriate. Should this option be developed, details (who can do it? when? how?) must be defined.
Event provider can delete event while delete delay (contract based, managed by Arianee)After this delay, event provider need double confirmation with Arianee

## Event content

An event is dated on the Blockchain (transaction date) and linked to a JSON file following the schema as described [here](https://docs.arianee.org/docs/ArianeeEvent-i18n).

## Event fees

The entity issuing the event, may this be the Brand or a third party, is the only stakeholder paying for the event feature.
Each event has a stable price in fiat currency of 1$ (USD) payable only in Aria (the Arianee protocol cryptocurrency).

The Aria paid by the entity issuing the event are shared among the stakeholders of the Arianee protocol:

- 40% for the Arianee project
- 20% for the interface provider of the Certificate Management platform, integration or connector
- 20% for the interface provider of the owner’s wallet
- 10% for the infrastructure (Blockchain nodes)
- 10% for the owner of the certificate

## About interfaces

The entity **issues** the event through a Certificate Management Platform or any compatible interface.
Brands **might approve** events through their Certificate Management Platform or any compatible interface.
Owners will have **access to** the event feature **and might approve** an event through the official Arianee .wallet application or any compatible interface.

## About authenticity

To be authentic, an event must be issued by a registered entity. To learn more please refer to the [*Know Your Business (KYB) process*](https://docs.google.com/document/d/1b996lWS_L8i5UkoAk9vJnP6PBnMy9XGkuTZ1wISEFPs/edit?usp=sharing).
All information relating to an event is secured by a hash (imprint) stored on the Blockchain to **guarantee content authenticity**.

## About data storage

All information included in the JSON file is stored **on the Brand server** hosting the Certificate Management Platform which issued the certificate.

## About privacy

Information and content of events remain available to anyone if:

- He / she / it has access to the Blockchain **OR** he / she / it can provide the secret keys provided by the Owner or the Arianee tag on the product to unlock access to the information and content of the related certificate
- The links within the event record still point to active and authentic content

## Link with messages feature

Once an event is added to a certificate, the event issuer can send messages to the certificate (and so the owner). The Owner can opt out from messages of the entity who **issued** the event.Price and details remain to be defined.

## Link with certificate history feature

Events appear in the certificate history. The transfer from one owner to another has no impact on this, events remain in the certificate history.

