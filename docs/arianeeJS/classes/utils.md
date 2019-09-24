[@arianee/arianeejs](../README.md) › [Globals](../globals.md) › [Utils](utils.md)

# Class: Utils

## Hierarchy

* **Utils**

## Index

### Constructors

* [constructor](utils.md#constructor)

### Properties

* [web3](utils.md#private-web3)

### Methods

* [cert](utils.md#cert)
* [cleanObject](utils.md#private-cleanobject)
* [createPassphrase](utils.md#createpassphrase)
* [signProof](utils.md#signproof)
* [signProofForRequestToken](utils.md#signproofforrequesttoken)

## Constructors

###  constructor

\+ **new Utils**(`web3`: any): *[Utils](utils.md)*

*Defined in [core/utils.ts:4](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/utils.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`web3` | any |

**Returns:** *[Utils](utils.md)*

## Properties

### `Private` web3

• **web3**: *any*

*Defined in [core/utils.ts:5](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/utils.ts#L5)*

## Methods

###  cert

▸ **cert**(`schema`: any, `data`: any): *Promise‹string›*

*Defined in [core/utils.ts:37](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/utils.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`schema` | any |
`data` | any |

**Returns:** *Promise‹string›*

___

### `Private` cleanObject

▸ **cleanObject**(`obj`: any): *any*

*Defined in [core/utils.ts:50](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/utils.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *any*

___

###  createPassphrase

▸ **createPassphrase**(): *string*

*Defined in [core/utils.ts:22](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/utils.ts#L22)*

**Returns:** *string*

___

###  signProof

▸ **signProof**(`data`: string | Array‹any›, `privateKey`: string): *any*

*Defined in [core/utils.ts:33](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/utils.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | string &#124; Array‹any› |
`privateKey` | string |

**Returns:** *any*

___

###  signProofForRequestToken

▸ **signProofForRequestToken**(`tokenId`: number, `publicKeyNextOwner`: string, `privateKeyPreviousOwner`: string): *any*

*Defined in [core/utils.ts:7](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/utils.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`tokenId` | number |
`publicKeyNextOwner` | string |
`privateKeyPreviousOwner` | string |

**Returns:** *any*
