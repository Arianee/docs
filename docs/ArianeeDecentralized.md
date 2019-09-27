---
id: ArianeeDecentralized
title:  Arianee Decentralized Platform
sidebar_label:  Arianee Decentralized Platform
---





## **What is a decentralized platform?**


In the Blockchain context a decentralized platform means that there is no centralized data storage mechanism. The information is available with all the participants in the network. From a system design perspective, you will have nodes instead of a client server.


## **About the POA Network blockchain**

Interoperability is a major asset for a Blockchain standard and the Arianee protocol aims to be as flexible as possible when a company will have to select the underlying Blockchain it uses.

 

For the first deployment of the Arianee protocol, the Arianee project selected the POA Network Blockchain for the following reasons:



*   POA Network is a sidechain of the Ethereum blockchain which has the second-biggest market capitalization in the Blockchain world. That means POA Network provides interoperability and facilitate asset transfers between Ethereum-based networks. To learn more please refer to the _cross-chain bridge documentation_.
*   POA Network is based on the Ethereum protocol, the most mature and spread one to manage smart contracts as we write these lines. To learn more about smart contracts please refer to the dedicated section (just below).
*   The price of transactions is cheaper and more stable on POA Network than the Ethereum main blockchain. This is essentially due to the difference of consensus mechanism between POA Network (Proof of Authonomy) and the Ethereum main blockchain (Proof of Work). To learn more about consensus mechanisms you we suggest reading this.
*   The time to validate transactions is lower on POA Network (around 5 seconds) than the Ethereum main blockchain (around 15 seconds).

## **What is a smart contract?**


Smart contracts were first proposed in 1994 by Nick Szabo. He defined them as computerized transaction protocols that execute terms of a contract.

 

In practical words, a Blockchain smart contract is a collection of code (its functions) and data (its state) that resides at a specific address on the Blockchain. Smart contracts are self-executing and render transactions traceable and irreversible.


## **The Arianee smart contracts**

The Arianee protocol defines a set of smart contracts to manage tokens related to certificates. Certificates themselves are one type of smart contract, called Arianee Smart Asset.

 

Here is an overview of the Arianee protocol smart contracts:



![alt_text](../img/arianeesmartcontract.png "image_tooltip")


To favor interoperability and adoption the Arianee protocol designed a crypto currency (the ARIA token) compliant with the[ ERC-20 Token Standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) and certificates compliant (The Arianee Smart Assets) with the[ ERC-721 Token Standard](https://github.com/ethereum/eips/issues/721).


## **About data storage**

The Arianee protocol when used at its core **<span style="text-decoration:underline;">never</span>** asks, stores or uses personal information about owners but their wallet public key. Owners are anonymous using the Arianee protocol.




![alt_text](../img/arianeedatastorage.png "image_tooltip")


Information and content of certificates remain available to stakeholders with the right level of permission if:



*   The stakeholder has access to the Blockchain **OR **the stakeholder can provide the secret keys provided by the Owner or the Arianee tag on the product to unlock access to the information and content of the related certificate.
*   The links within the certificates still point to active content.

## **About data recovery**


Data from the Arianee protocol stored on a specific address on a Blockchain can be:



*   Read and/or enriched if and only if a set of cryptographic keys, including the public key but excluding the private key of this address, is provided.
*   Transferred if and only if the private key of this address is used in signed transaction. There is no recovery if the private key cannot be use for signing.

 

Data stored by the Vault provider can be updated and recovered according to the Vault provider policy. Brands should be especially cautious when selecting their Vault provider because:



*   Updates of the data provided by the Vault provider may lead to an authentication failure of certificates.
*   If the links within the Blockchain certificates do not point to active content anymore, owners will not have access to this content anymore.
*   Vault breach may lead to the hack of a Brand private keys, leading to the misuse of features available to the Brand.

     


Data stored by the Wallet provider can be recovered according to the Wallet provider policy. Owners should be especially cautious when selecting their Wallet provider because:



*   Recovery of the owner’s wallet depends on the Wallet provider ability to safely save the owner’s private keys or to give him/her a way, such as mnemonic words, to recover their private keys in case of the loss of the wallet.
*   Wallet breach may lead to the hack of the owner private keys, leading to the misuse of his certificates.


![alt_text](../img/arianeewallet.png "image_tooltip")



## **About certificate authenticity**

The Arianee protocol provides the tools to verify the authenticity of a certificate based on three criteria:

 



*   The Brand identity is verified. That means the Brand went through a _Know Your Business_ (KYB) process and was registered by the Arianee project as a verified Brand.

     

*   The Brand identity is authentic. That means the Brand identity used to issue the certificate is the same than the one verified by the Arianee project.
*   The certificate is authentic. That means the content of the certificate has not changed since the certificate issuance.


Arianee use the certification process designed by [0xCert](https://0xcert.org/). 

## **Compatible applications**


The Arianee project embraces a world where developers, startups, integrators or even Brands build their own applications, integrations or connectors to leverage the Arianee protocol.

 

Such world does not exist (yet!), so Arianee SAS developed a suite of applications to support pilot projects and the adoption of the Arianee protocol:

 



*   The **Brand Data Hub**: A web Certificate Management Platform for Brands to create and manage certificates. Each Brand Data Hub is dedicated to one Brand only.
*   The **Arianee .Wallet application** is a mobile application available on the App Store and Google Play for owners to claim and manage their certificates. The application let the owner import or use a newly created POA Network address to manage his/her certificates.

     
<a href="https://apps.apple.com/ch/app/arianee-wallet/id1435782507" target="_blank"><img src="../img/appstore.svg" alt="drawing" width="200"/></a>
<a href="https://play.google.com/store/apps/details?id=com.arianee.wallet&hl=ln" target="_blank"><img src="../img/googleplay.svg" alt="drawing" width="200"/></a>
