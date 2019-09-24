[@arianee/arianeejs](../README.md) › [Globals](../globals.md) › [ArianeeWallet](arianeewallet.md)

# Class: ArianeeWallet

## Hierarchy

* **ArianeeWallet**

  ↳ [EnrichedWallet](enrichedwallet.md)

## Index

### Constructors

* [constructor](arianeewallet.md#constructor)

### Properties

* [_account](arianeewallet.md#private-_account)
* [ariaContract](arianeewallet.md#ariacontract)
* [arianeeState](arianeewallet.md#protected-arianeestate)
* [brandDataHubRewardAddress](arianeewallet.md#protected-branddatahubrewardaddress)
* [creditHistoryContract](arianeewallet.md#credithistorycontract)
* [eventContract](arianeewallet.md#eventcontract)
* [identityContract](arianeewallet.md#identitycontract)
* [smartAssetContract](arianeewallet.md#smartassetcontract)
* [stakingContract](arianeewallet.md#stakingcontract)
* [storeContract](arianeewallet.md#storecontract)
* [utils](arianeewallet.md#utils)
* [walletRewardAddress](arianeewallet.md#protected-walletrewardaddress)
* [whitelistContract](arianeewallet.md#whitelistcontract)

### Accessors

* [account](arianeewallet.md#account)
* [privateKey](arianeewallet.md#privatekey)
* [publicKey](arianeewallet.md#publickey)
* [web3](arianeewallet.md#web3)

## Constructors

###  constructor

\+ **new ArianeeWallet**(`arianeeState`: [ArianeeState](arianeestate.md), `_account`: any): *[ArianeeWallet](arianeewallet.md)*

*Defined in [core/wallet/arianee-wallet.ts:30](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`arianeeState` | [ArianeeState](arianeestate.md) |
`_account` | any |

**Returns:** *[ArianeeWallet](arianeewallet.md)*

## Properties

### `Private` _account

• **_account**: *any*

*Defined in [core/wallet/arianee-wallet.ts:32](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L32)*

___

###  ariaContract

• **ariaContract**: *Aria*

*Defined in [core/wallet/arianee-wallet.ts:20](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L20)*

___

### `Protected` arianeeState

• **arianeeState**: *[ArianeeState](arianeestate.md)*

*Defined in [core/wallet/arianee-wallet.ts:32](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L32)*

___

### `Protected` brandDataHubRewardAddress

• **brandDataHubRewardAddress**: *string* = "0xA79B29AD7e0196C95B87f4663ded82Fbf2E3ADD8"

*Defined in [core/wallet/arianee-wallet.ts:27](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L27)*

___

###  creditHistoryContract

• **creditHistoryContract**: *ArianeeCreditHistory*

*Defined in [core/wallet/arianee-wallet.ts:21](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L21)*

___

###  eventContract

• **eventContract**: *ArianeeEvent*

*Defined in [core/wallet/arianee-wallet.ts:24](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L24)*

___

###  identityContract

• **identityContract**: *ArianeeIdentity*

*Defined in [core/wallet/arianee-wallet.ts:19](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L19)*

___

###  smartAssetContract

• **smartAssetContract**: *ArianeeSmartAsset*

*Defined in [core/wallet/arianee-wallet.ts:18](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L18)*

___

###  stakingContract

• **stakingContract**: *ArianeeStaking*

*Defined in [core/wallet/arianee-wallet.ts:23](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L23)*

___

###  storeContract

• **storeContract**: *ArianeeStore*

*Defined in [core/wallet/arianee-wallet.ts:17](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L17)*

___

###  utils

• **utils**: *[Utils](utils.md)* =  new Utils(this.arianeeState.web3)

*Defined in [core/wallet/arianee-wallet.ts:25](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L25)*

___

### `Protected` walletRewardAddress

• **walletRewardAddress**: *string* = "0x39da7e30d2D5F2168AE3B8599066ab122680e1ef"

*Defined in [core/wallet/arianee-wallet.ts:30](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L30)*

___

###  whitelistContract

• **whitelistContract**: *ArianeeWhitelist*

*Defined in [core/wallet/arianee-wallet.ts:22](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L22)*

## Accessors

###  account

• **get account**(): *any*

*Defined in [core/wallet/arianee-wallet.ts:94](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L94)*

**Returns:** *any*

___

###  privateKey

• **get privateKey**(): *string*

*Defined in [core/wallet/arianee-wallet.ts:86](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L86)*

**Returns:** *string*

___

###  publicKey

• **get publicKey**(): *string*

*Defined in [core/wallet/arianee-wallet.ts:82](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L82)*

**Returns:** *string*

___

###  web3

• **get web3**(): *any*

*Defined in [core/wallet/arianee-wallet.ts:90](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet/arianee-wallet.ts#L90)*

**Returns:** *any*
