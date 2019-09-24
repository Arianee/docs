# Arianee Identity Schema

```
https://cert.arianee.org/version1/ArianeeIdentity-18n.json
```

Describing an Arianee Identity such as a company, a third party provider, ...

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                             |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------------ |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [ArianeeIdentity-i18n.json](ArianeeIdentity-i18n.json) |

# Arianee Identity Properties

| Property                              | Type       | Required     | Nullable | Default                                                        | Defined by                     |
| ------------------------------------- | ---------- | ------------ | -------- | -------------------------------------------------------------- | ------------------------------ |
| [\$schema](#schema)                   | `string`   | **Required** | No       | `"https://cert.arianee.org/version1/ArianeeIdentity-18n.json"` | Arianee Identity (this schema) |
| [address](#address)                   | `object`   | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [arianeeMember](#arianeemember)       | `boolean`  | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [contacts](#contacts)                 | `object[]` | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [coverPicture](#coverpicture)         | `string`   | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [externalContents](#externalcontents) | `object[]` | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [logoHeader](#logoheader)             | `string`   | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [logoSquare](#logosquare)             | `string`   | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [name](#name)                         | `string`   | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [parentCompany](#parentcompany)       | `string`   | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [rpcEndpoint](#rpcendpoint)           | `string`   | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [socialmedia](#socialmedia)           | `object[]` | Optional     | No       |                                                                | Arianee Identity (this schema) |
| [website](#website)                   | `string`   | Optional     | No       |                                                                | Arianee Identity (this schema) |
| `*`                                   | any        | Additional   | Yes      | this schema _allows_ additional properties                     |

## \$schema

### \$schema

`$schema`

- is **required**
- type: `string`
- default: `"https://cert.arianee.org/version1/ArianeeIdentity-18n.json"`
- defined in this schema

### \$schema Type

`string`

## address

### Address

Company address

`address`

- is optional
- type: `object`
- defined in this schema

### address Type

`object` with following properties:

| Property         | Type   | Required     |
| ---------------- | ------ | ------------ |
| `city`           | string | **Required** |
| `country`        | string | **Required** |
| `state`          | string | **Required** |
| `street_address` | string | **Required** |
| `zipcode`        | string | **Required** |

#### city

##### City

`city`

- is **required**
- type: `string`

##### city Type

`string`

#### country

##### Country

`country`

- is **required**
- type: `string`

##### country Type

`string`

#### state

##### State

`state`

- is **required**
- type: `string`

##### state Type

`string`

#### street_address

##### Street Address

`street_address`

- is **required**
- type: `string`

##### street_address Type

`string`

#### zipcode

##### Zip Code

`zipcode`

- is **required**
- type: `string`

##### zipcode Type

`string`

## arianeeMember

### Arianee Member

Company is part of Arianee Association

`arianeeMember`

- is optional
- type: `boolean`
- defined in this schema

### arianeeMember Type

`boolean`

## contacts

### Contacts

List of company contact

`contacts`

- is optional
- type: `object[]`
- defined in this schema

### contacts Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `email`  | string | Optional |
| `name`   | string | Optional |
| `title`  | string | Optional |

#### email

##### Email

`email`

- is optional
- type: `string`

##### email Type

`string`

#### name

##### Name

`name`

- is optional
- type: `string`

##### name Type

`string`

#### title

##### Title

`title`

- is optional
- type: `string`

##### title Type

`string`

## coverPicture

### Company Cover Picture

Brand Cover Square (2000x5000) transparent TBD

`coverPicture`

- is optional
- type: `string`
- defined in this schema

### coverPicture Type

`string`

## externalContents

### External Contents

List of External Contents such as website / documentation

`externalContents`

- is optional
- type: `object[]`
- defined in this schema

### externalContents Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property          | Type   | Required |
| ----------------- | ------ | -------- |
| `backgroundColor` | string | Optional |
| `color`           | string | Optional |
| `icon`            | string | Optional |
| `title`           | string | Optional |
| `url`             | string | Optional |

#### backgroundColor

##### Background Color

`backgroundColor`

- is optional
- type: `string`

##### backgroundColor Type

`string`

#### color

##### Color

`color`

- is optional
- type: `string`

##### color Type

`string`

#### icon

##### Icon

URL

`icon`

- is optional
- type: `string`

##### icon Type

`string`

#### title

##### Title

`title`

- is optional
- type: `string`

##### title Type

`string`

#### url

##### Url

`url`

- is optional
- type: `string`

##### url Type

`string`

## logoHeader

### Company Logo Header

Logo Header (1000x1000) transparent TBD

`logoHeader`

- is optional
- type: `string`
- defined in this schema

### logoHeader Type

`string`

## logoSquare

### Company Logo Square

Logo Square (1000x1000) transparent TBD

`logoSquare`

- is optional
- type: `string`
- defined in this schema

### logoSquare Type

`string`

## name

### Company Name

Name of the company

`name`

- is optional
- type: `string`
- defined in this schema

### name Type

`string`

## parentCompany

### Parent Company

Name of parent company

`parentCompany`

- is optional
- type: `string`
- defined in this schema

### parentCompany Type

`string`

## rpcEndpoint

### RPC Endpoint

Certificate Management Platform RPC URL

`rpcEndpoint`

- is optional
- type: `string`
- defined in this schema

### rpcEndpoint Type

`string`

## socialmedia

### Social Media

List of Social Media

`socialmedia`

- is optional
- type: `object[]`
- defined in this schema

### socialmedia Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `type`   | string | Optional |
| `value`  | string | Optional |

#### type

##### Type

`type`

- is optional
- type: `string`

##### type Type

`string`

#### value

##### Value

`value`

- is optional
- type: `string`

##### value Type

`string`

## website

### Website

Company Website

`website`

- is optional
- type: `string`
- defined in this schema

### website Type

`string`
