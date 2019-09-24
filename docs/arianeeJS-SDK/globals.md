[@arianee/arianeejs](README.md) › [Globals](globals.md)

# @arianee/arianeejs

## Index

### Enumerations

* [web3ProviderTypes](enums/web3providertypes.md)

### Classes

* [ArianeeContract](classes/arianeecontract.md)
* [ArianeeContractBuilder](classes/arianeecontractbuilder.md)
* [ArianeeContractConnector](classes/arianeecontractconnector.md)
* [ArianeeRPC](classes/arianeerpc.md)
* [ArianeeState](classes/arianeestate.md)
* [ArianeeStateBuilder](classes/arianeestatebuilder.md)
* [ArianeeWallet](classes/arianeewallet.md)
* [ArianeeWalletBuilder](classes/arianeewalletbuilder.md)
* [CertificateSummaryBuilder](classes/certificatesummarybuilder.md)
* [EnrichedWallet](classes/enrichedwallet.md)
* [Observable](classes/observable.md)
* [ProtocolConfigurationSetter](classes/protocolconfigurationsetter.md)
* [Utils](classes/utils.md)

### Interfaces

* [ArianeeConfig](interfaces/arianeeconfig.md)
* [ArianeeProtocolI](interfaces/arianeeprotocoli.md)
* [CertificateContent](interfaces/certificatecontent.md)
* [CertificateSummary](interfaces/certificatesummary.md)
* [Contract](interfaces/contract.md)
* [ExternalContent](interfaces/externalcontent.md)
* [HttpClient](interfaces/httpclient.md)
* [Picture](interfaces/picture.md)
* [Serialnumber](interfaces/serialnumber.md)
* [Socialmedia](interfaces/socialmedia.md)

### Variables

* [Web3](globals.md#const-web3)
* [fetch](globals.md#fetch)

### Functions

* [Arianee](globals.md#const-arianee)
* [CreateWalletWithPOAAndAria](globals.md#createwalletwithpoaandaria)
* [enableDev](globals.md#const-enabledev)
* [flatPromise](globals.md#flatpromise)

## Variables

### `Const` Web3

• **Web3**: *any* =  require("web3")

*Defined in [core/arianee-state/arianee-contract-builder.ts:3](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-state/arianee-contract-builder.ts#L3)*

*Defined in [core/arianee-connector.ts:6](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-connector.ts#L6)*

*Defined in [core/wallet-maker/arianee-wallet-builder.ts:7](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/wallet-maker/arianee-wallet-builder.ts#L7)*

*Defined in [core/arianee-state/arianee-state.test.ts:3](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-state/arianee-state.test.ts#L3)*

___

###  fetch

• **fetch**: *any* =  require('node-fetch-polyfill')

*Defined in [core/arianee-state/rpc.service.ts:2](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-state/rpc.service.ts#L2)*

*Defined in [core/arianee-state/arianee-state.ts:5](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-state/arianee-state.ts#L5)*

## Functions

### `Const` Arianee

▸ **Arianee**(`confOverride?`: any): *[ArianeeWalletBuilder](classes/arianeewalletbuilder.md)*

*Defined in [core/arianee-factory/arianee-factory.ts:6](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-factory/arianee-factory.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`confOverride?` | any |

**Returns:** *[ArianeeWalletBuilder](classes/arianeewalletbuilder.md)*

___

###  CreateWalletWithPOAAndAria

▸ **CreateWalletWithPOAAndAria**(`fromPrivateKey?`: string, `force`: boolean): *Promise‹[ArianeeWallet](classes/arianeewallet.md)›*

*Defined in [e2e/utils/create-wallet.ts:6](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/e2e/utils/create-wallet.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`fromPrivateKey?` | string | - |
`force` | boolean | false |

**Returns:** *Promise‹[ArianeeWallet](classes/arianeewallet.md)›*

___

### `Const` enableDev

▸ **enableDev**(): *"/Users/alexandre/projects/arianeeJS/src/arianee-configuration/dev/index"*

*Defined in [core/arianee-factory/enable-dev-mode.ts:3](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/arianee-factory/enable-dev-mode.ts#L3)*

**Returns:** *"/Users/alexandre/projects/arianeeJS/src/arianee-configuration/dev/index"*

___

###  flatPromise

▸ **flatPromise**(): *object*

*Defined in [core/libs/flat-promise.ts:1](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/libs/flat-promise.ts#L1)*

**Returns:** *object*

* **promise**: *Promise‹Object›*

* **reject**: *any*

* **resolve**: *any*
