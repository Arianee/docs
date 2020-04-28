---
title: Arianee Links
sidebar_label: Arianee Links
---

Arianee uses links to share certicate access and to get ownership.

## Default link

The base structure of on Arianee link :
```https://arian.ee/1234,x7kj3dp```

> https://arian.ee/**certificateId**,**passphrase**

To use testnet, replace **arian.ee** with **test.arian.ee**



## Link with method
```https://arian.ee/request/1234,x7kj3dp```


> https://arian.ee/*method*/**certificateId**,**passphrase**

Method could be 'request' if it's a link to request ownership (or method could be empty)

Method could be 'proof' if it's a link to prove ownership


## Links tracking

Arianee web onboarding can handle web tracking.

You can add query string and it will be tracked on Arianee Web onboarding

```https://arian.ee/request/1234,x7kj3dp?utm_source=productTag```


> Be carefull. When transforming this link to a QR Code, keep in mind that the QR code will be harder to scan if the link length is large

## Personnalized links

Links with domain **arian.ee** use the Arianee web onboarding with deferred deeplink to Arianee Wallet mobile app.

It's allowed to change domain according to your need.

In that case, you need to keep link structure & format.
You also need to build your own web onboarding to encourage users to download your mobile app.




