[@arianee/arianeejs](../README.md) › [Globals](../globals.md) › [ArianeeContractConnector](arianeecontractconnector.md)

# Class: ArianeeContractConnector

## Hierarchy

* **ArianeeContractConnector**

## Index

### Constructors

* [constructor](arianeecontractconnector.md#constructor)

### Properties

* [ariaContract](arianeecontractconnector.md#ariacontract)
* [arianeeConfig](arianeecontractconnector.md#private-arianeeconfig)
* [creditHistoryContract](arianeecontractconnector.md#credithistorycontract)
* [identityContract](arianeecontractconnector.md#identitycontract)
* [smartAssetContract](arianeecontractconnector.md#smartassetcontract)
* [stakingContract](arianeecontractconnector.md#stakingcontract)
* [storeContract](arianeecontractconnector.md#storecontract)
* [web3](arianeecontractconnector.md#private-web3)
* [whitelistContract](arianeecontractconnector.md#whitelistcontract)

### Methods

* [connect](arianeecontractconnector.md#connect)
* [simplify](arianeecontractconnector.md#simplify)

## Constructors

###  constructor

\+ **new ArianeeContractConnector**(`web3Provider`: string, `arianeeConfig`: [ArianeeConfig](../interfaces/arianeeconfig.md)): *[ArianeeContractConnector](arianeecontractconnector.md)*

*Defined in [core/arianee-connector.ts:16](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L16)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`web3Provider` | string |  web3ProviderTypes.internal |
`arianeeConfig` | [ArianeeConfig](../interfaces/arianeeconfig.md) | - |

**Returns:** *[ArianeeContractConnector](arianeecontractconnector.md)*

## Properties

###  ariaContract

• **ariaContract**: *Aria*

*Defined in [core/arianee-connector.ts:12](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L12)*

___

### `Private` arianeeConfig

• **arianeeConfig**: *[ArianeeConfig](../interfaces/arianeeconfig.md)*

*Defined in [core/arianee-connector.ts:18](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L18)*

___

###  creditHistoryContract

• **creditHistoryContract**: *ArianeeCreditHistory*

*Defined in [core/arianee-connector.ts:13](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L13)*

___

###  identityContract

• **identityContract**: *ArianeeIdentity*

*Defined in [core/arianee-connector.ts:11](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L11)*

___

###  smartAssetContract

• **smartAssetContract**: *ArianeeSmartAsset*

*Defined in [core/arianee-connector.ts:10](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L10)*

___

###  stakingContract

• **stakingContract**: *ArianeeStaking*

*Defined in [core/arianee-connector.ts:15](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L15)*

___

###  storeContract

• **storeContract**: *ArianeeStore*

*Defined in [core/arianee-connector.ts:9](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L9)*

___

### `Private` web3

• **web3**: *any*

*Defined in [core/arianee-connector.ts:16](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L16)*

___

###  whitelistContract

• **whitelistContract**: *ArianeeWhitelist*

*Defined in [core/arianee-connector.ts:14](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L14)*

## Methods

###  connect

▸ **connect**(): *this*

*Defined in [core/arianee-connector.ts:23](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L23)*

**Returns:** *this*

___

###  simplify

▸ **simplify**(`wallet`: [ArianeeWallet](arianeewallet.md)): *void*

*Defined in [core/arianee-connector.ts:37](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`wallet` | [ArianeeWallet](arianeewallet.md) |

**Returns:** *void*
