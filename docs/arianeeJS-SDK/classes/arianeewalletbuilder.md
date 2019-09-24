[@arianee/arianeejs](../README.md) › [Globals](../globals.md) › [ArianeeWalletBuilder](arianeewalletbuilder.md)

# Class: ArianeeWalletBuilder

## Hierarchy

* **ArianeeWalletBuilder**

## Index

### Constructors

* [constructor](arianeewalletbuilder.md#constructor)

### Properties

* [account](arianeewalletbuilder.md#private-account)
* [stateBuilder](arianeewalletbuilder.md#statebuilder)
* [web3](arianeewalletbuilder.md#private-web3)

### Methods

* [buildAriaWallet](arianeewalletbuilder.md#private-buildariawallet)
* [fromMnemonic](arianeewalletbuilder.md#frommnemonic)
* [fromPassPhrase](arianeewalletbuilder.md#frompassphrase)
* [fromPrivateKey](arianeewalletbuilder.md#fromprivatekey)
* [fromRandomKey](arianeewalletbuilder.md#fromrandomkey)
* [fromRandomMnemonic](arianeewalletbuilder.md#fromrandommnemonic)
* [generateMnemonic](arianeewalletbuilder.md#private-generatemnemonic)

## Constructors

###  constructor

\+ **new ArianeeWalletBuilder**(`arianeeConfig`: [ArianeeConfig](../interfaces/arianeeconfig.md)): *[ArianeeWalletBuilder](arianeewalletbuilder.md)*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:13](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`arianeeConfig` | [ArianeeConfig](../interfaces/arianeeconfig.md) |

**Returns:** *[ArianeeWalletBuilder](arianeewalletbuilder.md)*

## Properties

### `Private` account

• **account**: *any*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:10](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L10)*

___

###  stateBuilder

• **stateBuilder**: *[ArianeeStateBuilder](arianeestatebuilder.md)* =  new ArianeeStateBuilder()

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:13](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L13)*

___

### `Private` web3

• **web3**: *any*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:11](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L11)*

## Methods

### `Private` buildAriaWallet

▸ **buildAriaWallet**(): *[ArianeeWallet](arianeewallet.md)*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:20](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L20)*

**Returns:** *[ArianeeWallet](arianeewallet.md)*

___

###  fromMnemonic

▸ **fromMnemonic**(`mnemonic`: string): *[ArianeeWallet](arianeewallet.md)*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:56](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L56)*

 From a mnemonic and return ArianeeProtocol

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`mnemonic` | string |   |

**Returns:** *[ArianeeWallet](arianeewallet.md)*

___

###  fromPassPhrase

▸ **fromPassPhrase**(`passphrase`: string): *[ArianeeWallet](arianeewallet.md)*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:28](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase` | string |

**Returns:** *[ArianeeWallet](arianeewallet.md)*

___

###  fromPrivateKey

▸ **fromPrivateKey**(`privateKey`: string): *[ArianeeWallet](arianeewallet.md)*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:71](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L71)*

 From privatekey and return ArianeeProtocol

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`privateKey` | string |   |

**Returns:** *[ArianeeWallet](arianeewallet.md)*

___

###  fromRandomKey

▸ **fromRandomKey**(): *[ArianeeWallet](arianeewallet.md)*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:36](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L36)*

From a randomKey and return ArianeeProtocol

**Returns:** *[ArianeeWallet](arianeewallet.md)*

___

###  fromRandomMnemonic

▸ **fromRandomMnemonic**(`data`: any): *[ArianeeWallet](arianeewallet.md)*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:46](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L46)*

Generate a mnemonic and return ArianeeProtocol

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | any |   |

**Returns:** *[ArianeeWallet](arianeewallet.md)*

___

### `Private` generateMnemonic

▸ **generateMnemonic**(`data`: string): *string*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:76](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string |

**Returns:** *string*
