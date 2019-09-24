[@arianee/arianeejs](../README.md) › [Globals](../globals.md) › [CertificateSummaryBuilder](certificatesummarybuilder.md)

# Class: CertificateSummaryBuilder

## Hierarchy

* **CertificateSummaryBuilder**

## Index

### Constructors

* [constructor](certificatesummarybuilder.md#constructor)

### Properties

* [_content](certificatesummarybuilder.md#private-_content)
* [_isCertificateValid](certificatesummarybuilder.md#private-_iscertificatevalid)
* [_issuerIdentityContent](certificatesummarybuilder.md#private-_issueridentitycontent)
* [_owner](certificatesummarybuilder.md#private-_owner)
* [wallet](certificatesummarybuilder.md#private-wallet)

### Methods

* [build](certificatesummarybuilder.md#build)
* [setContent](certificatesummarybuilder.md#setcontent)
* [setIsCertificateValid](certificatesummarybuilder.md#setiscertificatevalid)
* [setIssuerIdentityDetails](certificatesummarybuilder.md#setissueridentitydetails)
* [setOwner](certificatesummarybuilder.md#setowner)

## Constructors

###  constructor

\+ **new CertificateSummaryBuilder**(`wallet`: [ArianeeWallet](arianeewallet.md)): *[CertificateSummaryBuilder](certificatesummarybuilder.md)*

*Defined in [core/certificate-summary/certificate-summary.ts:54](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`wallet` | [ArianeeWallet](arianeewallet.md) |

**Returns:** *[CertificateSummaryBuilder](certificatesummarybuilder.md)*

## Properties

### `Private` _content

• **_content**: *[CertificateContent](../interfaces/certificatecontent.md)*

*Defined in [core/certificate-summary/certificate-summary.ts:51](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L51)*

___

### `Private` _isCertificateValid

• **_isCertificateValid**: *boolean*

*Defined in [core/certificate-summary/certificate-summary.ts:54](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L54)*

___

### `Private` _issuerIdentityContent

• **_issuerIdentityContent**: *any*

*Defined in [core/certificate-summary/certificate-summary.ts:52](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L52)*

___

### `Private` _owner

• **_owner**: *string*

*Defined in [core/certificate-summary/certificate-summary.ts:53](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L53)*

___

### `Private` wallet

• **wallet**: *[ArianeeWallet](arianeewallet.md)*

*Defined in [core/certificate-summary/certificate-summary.ts:56](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L56)*

## Methods

###  build

▸ **build**(): *[CertificateSummary](../interfaces/certificatesummary.md)*

*Defined in [core/certificate-summary/certificate-summary.ts:80](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L80)*

**Returns:** *[CertificateSummary](../interfaces/certificatesummary.md)*

___

###  setContent

▸ **setContent**(`content`: [CertificateContent](../interfaces/certificatecontent.md)): *[CertificateSummaryBuilder](certificatesummarybuilder.md)*

*Defined in [core/certificate-summary/certificate-summary.ts:58](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | [CertificateContent](../interfaces/certificatecontent.md) |

**Returns:** *[CertificateSummaryBuilder](certificatesummarybuilder.md)*

___

###  setIsCertificateValid

▸ **setIsCertificateValid**(`value`: boolean): *[CertificateSummaryBuilder](certificatesummarybuilder.md)*

*Defined in [core/certificate-summary/certificate-summary.ts:63](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | boolean |

**Returns:** *[CertificateSummaryBuilder](certificatesummarybuilder.md)*

___

###  setIssuerIdentityDetails

▸ **setIssuerIdentityDetails**(`identyDetails`: any): *[CertificateSummaryBuilder](certificatesummarybuilder.md)*

*Defined in [core/certificate-summary/certificate-summary.ts:73](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`identyDetails` | any |

**Returns:** *[CertificateSummaryBuilder](certificatesummarybuilder.md)*

___

###  setOwner

▸ **setOwner**(`owner`: string): *[CertificateSummaryBuilder](certificatesummarybuilder.md)*

*Defined in [core/certificate-summary/certificate-summary.ts:68](https://github.com/stefdelec/arianeeJS/blob/07076e4/src/core/certificate-summary/certificate-summary.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`owner` | string |

**Returns:** *[CertificateSummaryBuilder](certificatesummarybuilder.md)*
