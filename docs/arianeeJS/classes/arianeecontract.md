[@arianee/arianeejs](../README.md) › [Globals](../globals.md) › [ArianeeContract](arianeecontract.md)

# Class: ArianeeContract <**ContractImplementation**>

## Type parameters

▪ **ContractImplementation**: *[Contract](../interfaces/contract.md)*

## Hierarchy

* **ArianeeContract**

## Index

### Constructors

* [constructor](arianeecontract.md#constructor)

### Properties

* [arianeeState](arianeecontract.md#private-arianeestate)
* [contract](arianeecontract.md#private-contract)
* [key](arianeecontract.md#key)
* [wallet](arianeecontract.md#private-wallet)

### Methods

* [arianeeSignMetamask](arianeecontract.md#arianeesignmetamask)
* [makeArianee](arianeecontract.md#makearianee)
* [overideSend](arianeecontract.md#private-overidesend)

## Constructors

###  constructor

\+ **new ArianeeContract**(`contract`: ContractImplementation, `wallet`: [ArianeeWallet](arianeewallet.md), `arianeeState`: [ArianeeState](arianeestate.md)): *[ArianeeContract](arianeecontract.md)*

*Defined in [core/libs/contract-to-arianee-contract.ts:8](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/contract-to-arianee-contract.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`contract` | ContractImplementation |
`wallet` | [ArianeeWallet](arianeewallet.md) |
`arianeeState` | [ArianeeState](arianeestate.md) |

**Returns:** *[ArianeeContract](arianeecontract.md)*

## Properties

### `Private` arianeeState

• **arianeeState**: *[ArianeeState](arianeestate.md)*

*Defined in [core/libs/contract-to-arianee-contract.ts:10](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/contract-to-arianee-contract.ts#L10)*

___

### `Private` contract

• **contract**: *ContractImplementation*

*Defined in [core/libs/contract-to-arianee-contract.ts:10](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/contract-to-arianee-contract.ts#L10)*

___

###  key

• **key**: *ContractImplementation*

*Defined in [core/libs/contract-to-arianee-contract.ts:8](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/contract-to-arianee-contract.ts#L8)*

___

### `Private` wallet

• **wallet**: *[ArianeeWallet](arianeewallet.md)*

*Defined in [core/libs/contract-to-arianee-contract.ts:10](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/contract-to-arianee-contract.ts#L10)*

## Methods

###  arianeeSignMetamask

▸ **arianeeSignMetamask**(`transaction`: any): *Promise‹any›*

*Defined in [core/libs/contract-to-arianee-contract.ts:38](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/contract-to-arianee-contract.ts#L38)*

arianeeSignMetamask

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | any |

**Returns:** *Promise‹any›*

___

###  makeArianee

▸ **makeArianee**(): *ContractImplementation*

*Defined in [core/libs/contract-to-arianee-contract.ts:28](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/contract-to-arianee-contract.ts#L28)*

**Returns:** *ContractImplementation*

___

### `Private` overideSend

▸ **overideSend**(`transaction`: Transaction, `data`: TransactionObject‹any›): *Promise‹any›*

*Defined in [core/libs/contract-to-arianee-contract.ts:53](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/contract-to-arianee-contract.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`transaction` | Transaction |
`data` | TransactionObject‹any› |

**Returns:** *Promise‹any›*
