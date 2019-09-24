[@arianee/arianeejs](../README.md) › [Globals](../globals.md) › [Observable](observable.md)

# Class: Observable <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Observable**

## Index

### Properties

* [observers](observable.md#private-observers)

### Methods

* [broadcast](observable.md#broadcast)
* [protected](observable.md#protected)
* [subscribe](observable.md#subscribe)
* [unsubscribe](observable.md#unsubscribe)

## Properties

### `Private` observers

• **observers**: *any[]* =  []

*Defined in [core/libs/observable/observable.ts:2](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/observable/observable.ts#L2)*

## Methods

###  broadcast

▸ **broadcast**(`data`: T): *void*

*Defined in [core/libs/observable/observable.ts:13](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/observable/observable.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *void*

___

###  protected

▸ **protected**(): *object*

*Defined in [core/libs/observable/observable.ts:17](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/observable/observable.ts#L17)*

**Returns:** *object*

* **subscribe**: *[subscribe](observable.md#subscribe)* =  this.subscribe

* **unsubscribe**: *[unsubscribe](observable.md#unsubscribe)* =  this.unsubscribe

___

###  subscribe

▸ **subscribe**(`fn`: any): *(Anonymous function)*

*Defined in [core/libs/observable/observable.ts:4](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/observable/observable.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |

**Returns:** *(Anonymous function)*

___

###  unsubscribe

▸ **unsubscribe**(`fn`: any): *void*

*Defined in [core/libs/observable/observable.ts:9](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/observable/observable.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | any |

**Returns:** *void*
