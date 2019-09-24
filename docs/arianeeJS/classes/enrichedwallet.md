[@arianee/arianeejs](../README.md) › [Globals](../globals.md) › [EnrichedWallet](enrichedwallet.md)

# Class: EnrichedWallet

## Hierarchy

* [ArianeeWallet](arianeewallet.md)

  ↳ **EnrichedWallet**

## Index

### Constructors

* [constructor](enrichedwallet.md#constructor)

### Properties

* [ariaContract](enrichedwallet.md#ariacontract)
* [arianeeState](enrichedwallet.md#protected-arianeestate)
* [brandDataHubRewardAddress](enrichedwallet.md#protected-branddatahubrewardaddress)
* [creditHistoryContract](enrichedwallet.md#credithistorycontract)
* [eventContract](enrichedwallet.md#eventcontract)
* [identityContract](enrichedwallet.md#identitycontract)
* [smartAssetContract](enrichedwallet.md#smartassetcontract)
* [stakingContract](enrichedwallet.md#stakingcontract)
* [storeContract](enrichedwallet.md#storecontract)
* [utils](enrichedwallet.md#utils)
* [walletRewardAddress](enrichedwallet.md#protected-walletrewardaddress)
* [whitelistContract](enrichedwallet.md#whitelistcontract)

### Accessors

* [account](enrichedwallet.md#account)
* [methods](enrichedwallet.md#methods)
* [overridedMethods](enrichedwallet.md#private-overridedmethods)
* [privateKey](enrichedwallet.md#privatekey)
* [publicKey](enrichedwallet.md#publickey)
* [web3](enrichedwallet.md#web3)

### Methods

* [customHydrateToken](enrichedwallet.md#private-customhydratetoken)
* [customRequestToken](enrichedwallet.md#private-customrequesttoken)
* [getAria](enrichedwallet.md#getaria)
* [getAriaBalance](enrichedwallet.md#getariabalance)
* [getCertificate](enrichedwallet.md#getcertificate)
* [getFaucet](enrichedwallet.md#getfaucet)
* [getIdentity](enrichedwallet.md#getidentity)
* [getMyCertificates](enrichedwallet.md#getmycertificates)

## Constructors

###  constructor

\+ **new EnrichedWallet**(`arianeeState`: [ArianeeState](arianeestate.md), `_account`: any): *[EnrichedWallet](enrichedwallet.md)*

*Inherited from [ArianeeWallet](arianeewallet.md).[constructor](arianeewallet.md#constructor)*

*Defined in [core/wallet/arianee-wallet.ts:30](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`arianeeState` | [ArianeeState](arianeestate.md) |
`_account` | any |

**Returns:** *[EnrichedWallet](enrichedwallet.md)*

## Properties

###  ariaContract

• **ariaContract**: *Aria*

*Inherited from [ArianeeWallet](arianeewallet.md).[ariaContract](arianeewallet.md#ariacontract)*

*Defined in [core/wallet/arianee-wallet.ts:20](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L20)*

___

### `Protected` arianeeState

• **arianeeState**: *[ArianeeState](arianeestate.md)*

*Inherited from [ArianeeWallet](arianeewallet.md).[arianeeState](arianeewallet.md#protected-arianeestate)*

*Defined in [core/wallet/arianee-wallet.ts:32](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L32)*

___

### `Protected` brandDataHubRewardAddress

• **brandDataHubRewardAddress**: *string* = "0xA79B29AD7e0196C95B87f4663ded82Fbf2E3ADD8"

*Inherited from [ArianeeWallet](arianeewallet.md).[brandDataHubRewardAddress](arianeewallet.md#protected-branddatahubrewardaddress)*

*Defined in [core/wallet/arianee-wallet.ts:27](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L27)*

___

###  creditHistoryContract

• **creditHistoryContract**: *ArianeeCreditHistory*

*Inherited from [ArianeeWallet](arianeewallet.md).[creditHistoryContract](arianeewallet.md#credithistorycontract)*

*Defined in [core/wallet/arianee-wallet.ts:21](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L21)*

___

###  eventContract

• **eventContract**: *ArianeeEvent*

*Inherited from [ArianeeWallet](arianeewallet.md).[eventContract](arianeewallet.md#eventcontract)*

*Defined in [core/wallet/arianee-wallet.ts:24](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L24)*

___

###  identityContract

• **identityContract**: *ArianeeIdentity*

*Inherited from [ArianeeWallet](arianeewallet.md).[identityContract](arianeewallet.md#identitycontract)*

*Defined in [core/wallet/arianee-wallet.ts:19](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L19)*

___

###  smartAssetContract

• **smartAssetContract**: *ArianeeSmartAsset*

*Inherited from [ArianeeWallet](arianeewallet.md).[smartAssetContract](arianeewallet.md#smartassetcontract)*

*Defined in [core/wallet/arianee-wallet.ts:18](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L18)*

___

###  stakingContract

• **stakingContract**: *ArianeeStaking*

*Inherited from [ArianeeWallet](arianeewallet.md).[stakingContract](arianeewallet.md#stakingcontract)*

*Defined in [core/wallet/arianee-wallet.ts:23](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L23)*

___

###  storeContract

• **storeContract**: *ArianeeStore*

*Inherited from [ArianeeWallet](arianeewallet.md).[storeContract](arianeewallet.md#storecontract)*

*Defined in [core/wallet/arianee-wallet.ts:17](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L17)*

___

###  utils

• **utils**: *[Utils](utils.md)* =  new Utils(this.arianeeState.web3)

*Inherited from [ArianeeWallet](arianeewallet.md).[utils](arianeewallet.md#utils)*

*Defined in [core/wallet/arianee-wallet.ts:25](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L25)*

___

### `Protected` walletRewardAddress

• **walletRewardAddress**: *string* = "0x39da7e30d2D5F2168AE3B8599066ab122680e1ef"

*Inherited from [ArianeeWallet](arianeewallet.md).[walletRewardAddress](arianeewallet.md#protected-walletrewardaddress)*

*Defined in [core/wallet/arianee-wallet.ts:30](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L30)*

___

###  whitelistContract

• **whitelistContract**: *ArianeeWhitelist*

*Inherited from [ArianeeWallet](arianeewallet.md).[whitelistContract](arianeewallet.md#whitelistcontract)*

*Defined in [core/wallet/arianee-wallet.ts:22](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L22)*

## Accessors

###  account

• **get account**(): *any*

*Inherited from [ArianeeWallet](arianeewallet.md).[account](arianeewallet.md#account)*

*Defined in [core/wallet/arianee-wallet.ts:94](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L94)*

**Returns:** *any*

___

###  methods

• **get methods**(): *object*

*Defined in [core/wallet/enriched-wallet.ts:17](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L17)*

**Returns:** *object*

* **balanceOfAria**: *balanceOf* =  this.ariaContract.methods.balanceOf

* **balanceOfGas**: *any* =  this.arianeeState.web3.eth.getBalance

___

### `Private` overridedMethods

• **get overridedMethods**(): *object*

*Defined in [core/wallet/enriched-wallet.ts:10](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L10)*

**Returns:** *object*

* **hydrateToken**: *[customHydrateToken](undefined)* =  this.customHydrateToken

* **requestToken**: *[customRequestToken](undefined)* =  this.customRequestToken

___

###  privateKey

• **get privateKey**(): *string*

*Inherited from [ArianeeWallet](arianeewallet.md).[privateKey](arianeewallet.md#privatekey)*

*Defined in [core/wallet/arianee-wallet.ts:86](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L86)*

**Returns:** *string*

___

###  publicKey

• **get publicKey**(): *string*

*Inherited from [ArianeeWallet](arianeewallet.md).[publicKey](arianeewallet.md#publickey)*

*Defined in [core/wallet/arianee-wallet.ts:82](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L82)*

**Returns:** *string*

___

###  web3

• **get web3**(): *any*

*Inherited from [ArianeeWallet](arianeewallet.md).[web3](arianeewallet.md#web3)*

*Defined in [core/wallet/arianee-wallet.ts:90](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L90)*

**Returns:** *any*

## Methods

### `Private` customHydrateToken

▸ **customHydrateToken**(`data`: object): *Promise‹any›*

*Defined in [core/wallet/enriched-wallet.ts:264](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L264)*

**Parameters:**

▪ **data**: *object*

Name | Type |
------ | ------ |
`certificate?` | object |
`hash?` | string |
`initialKeyIsRequestKey?` | boolean |
`passphrase?` | string |
`tokenId?` | number |
`tokenRecoveryTimestamp?` | number &#124; number |
`uri` | string |

**Returns:** *Promise‹any›*

___

### `Private` customRequestToken

▸ **customRequestToken**(`tokenId`: number, `passphrase`: string, `isTest`: boolean): *Promise‹void›*

*Defined in [core/wallet/enriched-wallet.ts:30](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L30)*

Simplified request token

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`tokenId` | number | - | - |
`passphrase` | string | - |   |
`isTest` | boolean | false | - |

**Returns:** *Promise‹void›*

___

###  getAria

▸ **getAria**(): *Promise‹any›*

*Defined in [core/wallet/enriched-wallet.ts:348](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L348)*

**Returns:** *Promise‹any›*

___

###  getAriaBalance

▸ **getAriaBalance**(): *Promise‹number›*

*Defined in [core/wallet/enriched-wallet.ts:357](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L357)*

**Returns:** *Promise‹number›*

___

###  getCertificate

▸ **getCertificate**(`tokenId`: string | number, `passphrase?`: string): *Promise‹[CertificateSummary](../interfaces/certificatesummary.md)›*

*Defined in [core/wallet/enriched-wallet.ts:146](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`tokenId` | string &#124; number |
`passphrase?` | string |

**Returns:** *Promise‹[CertificateSummary](../interfaces/certificatesummary.md)›*

___

###  getFaucet

▸ **getFaucet**(): *Promise‹any›*

*Defined in [core/wallet/enriched-wallet.ts:340](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L340)*

**Returns:** *Promise‹any›*

___

###  getIdentity

▸ **getIdentity**(`address`: string): *Promise‹[CertificateSummary](../interfaces/certificatesummary.md)›*

*Defined in [core/wallet/enriched-wallet.ts:58](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *Promise‹[CertificateSummary](../interfaces/certificatesummary.md)›*

___

###  getMyCertificates

▸ **getMyCertificates**(): *Promise‹[CertificateSummary](../interfaces/certificatesummary.md)[]›*

*Defined in [core/wallet/enriched-wallet.ts:115](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/enriched-wallet.ts#L115)*

**Returns:** *Promise‹[CertificateSummary](../interfaces/certificatesummary.md)[]›*
