---
title: Arianee Event
sidebar_label: Arianee Event
---

## What is an event? 

The Event feature enables a Blockchain wallet, from a Brand or a third party for example, to create an Event on the Blockchain.
By design, an Event is linked to one and only one Passport. An Event can be accepted or rejected by the Brand who issued the Passport or the current owner of the Passport.An Event aims at enriching the History of a Passport. To learn more about the Passport History please refer to [the History section](https://docs.arianee.org/docs/arianee-history)

## Event workflow

The Event request is initiated by a Blockchain Wallet, usually from a Brand or a third party.
An event will be composed by:

- A content: title, description, medias, links…

- The ArianeeId of the Passport

- The creator of this Event

  

Once created, only the imprint of the Event and the transaction details relating to the creation can be seen on the Blockchain. The actual content of the Event is stored in Arianee Privacy Gateway: blockchain authenticated content gateway: Only authorized Wallet can access content (Passport Issuer, current Passport Owner).
An Event can be accepted or rejected by the Brand who issued the Passport or the current Passport owner. An accepted Event cannot be detached from the Passport, a rejected Event is destroyed.
To dig into the technical details, please refer to [the Event SDK section](https://docs.arianee.org/docs/arianee-js-event) or [the Arianee Event Schema](https://docs.arianee.org/docs/ArianeeEvent-i18n).

## Best Practices

Events with exhaustive content will improve customer impact & Business intelligence capabilities of the issuer of a Passport.

The right interfaces and infrastructure should be used to create Events:

- For security & reliability reasonsto build exhaustive Events

- To store the content of the Event

  

The Event is different from an [Update](https://docs.arianee.org/docs/arianee-update) and a Message. Recommended use cases for the Event feature are:

- A Service was performed on the product and should be recorded
- The product related to the passport lived a special moment worth noting and should be recorded

## Event fees

The creation of an Event has a stable price in fiat currency of 1.0 USD payable only in Aria (the Arianee protocol cryptocurrency) by the issuer of the Event.
Extra fees may apply if the Event issuer outsources the creation of Events to a third party or uses an external software to Create its Events.

## About interfaces

The Event creation can be done using the API integration with ArianeeJS library or directly at the Blockchain level interacting with smart contracts.
The Event issuer can develop its own interface, outsource the development to a third party or it can use an external interface such as the Passport Management Platform.
Owners may consult and accept/reject the Events in the History of the Passport on the .Wallet application developed by Arianee or any compatible interface.

## About authenticity

To be authentic, an Event must be issued by a registered entity. To learn more please refer to the [*Know Your Business (KYB) process*](https://docs.google.com/document/d/1b996lWS_L8i5UkoAk9vJnP6PBnMy9XGkuTZ1wISEFPs/edit?usp=sharing).
All information relating to an Event is secured by a hash (imprint) stored on the Blockchain to **guarantee content authenticity**.

## About data storage

The content of the Event can be stored on **any server, most often the Brand server** **hosting the Passport Management Platform** which issued the Passport. 
The imprint of the Event and the transaction details relating to the Event can be seen on the Blockchain. 

## Link with messages feature

Once an Event is linked to a Passport, the Event issuer can send Messages to the Passport. The Owner can opt out from Messages of the entity who issued the Event.
To learn more about Messages, please refer to [the Message section](https://docs.arianee.org/docs/arianee-message)

## Link with certificate history feature

Events may appear in the Passport History. 
To learn more about History, please refer to [the History section](https://docs.arianee.org/docs/arianee-history)

