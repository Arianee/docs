# Arianee Brand Identity Schema

```
https://cert.arianee.org/version1/ArianeeBrandIdentity-i18n.json
```

Describing an Arianee Brand Identity.

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                       |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [ArianeeBrandIdentity-i18n.json](ArianeeBrandIdentity-i18n.json) |

# Arianee Brand Identity Properties

| Property                                | Type       | Required     | Nullable | Default                                                              | Defined by                           |
| --------------------------------------- | ---------- | ------------ | -------- | -------------------------------------------------------------------- | ------------------------------------ |
| [\$schema](#schema)                     | `string`   | **Required** | No       | `"https://cert.arianee.org/version1/ArianeeBrandIdentity-i18n.json"` | Arianee Brand Identity (this schema) |
| [address](#address)                     | `object`   | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [arianeeMembership](#arianeemembership) | `string`   | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [companyName](#companyname)             | `string`   | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [contacts](#contacts)                   | `object[]` | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [description](#description)             | `string`   | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [descriptioni18n](#descriptioni18n)     | `object[]` | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [externalContents](#externalcontents)   | `object[]` | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [name](#name)                           | `string`   | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [parentCompanyName](#parentcompanyname) | `string`   | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [pictures](#pictures)                   | `object[]` | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [rpcEndpoint](#rpcendpoint)             | `string`   | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| [socialmedia](#socialmedia)             | `object[]` | Optional     | No       |                                                                      | Arianee Brand Identity (this schema) |
| `*`                                     | any        | Additional   | Yes      | this schema _allows_ additional properties                           |

## \$schema

### \$schema

`$schema`

- is **required**
- type: `string`
- default: `"https://cert.arianee.org/version1/ArianeeBrandIdentity-i18n.json"`
- defined in this schema

### \$schema Type

`string`

## address

### Address

Company HQ address

`address`

- is optional
- type: `object`
- defined in this schema

### address Type

`object` with following properties:

| Property          | Type   | Required |
| ----------------- | ------ | -------- |
| `city`            | string | Optional |
| `country`         | string | Optional |
| `state`           | string | Optional |
| `street_address`  | string | Optional |
| `street_address2` | string | Optional |
| `zipcode`         | string | Optional |

#### city

##### City

`city`

- is optional
- type: `string`

##### city Type

`string`

#### country

##### Country

`country`

- is optional
- type: `string`

##### country Type

`string`

#### state

##### State

`state`

- is optional
- type: `string`

##### state Type

`string`

#### street_address

##### Street Address

`street_address`

- is optional
- type: `string`

##### street_address Type

`string`

#### street_address2

##### Street Address 2

`street_address2`

- is optional
- type: `string`

##### street_address2 Type

`string`

#### zipcode

##### Zip Code

`zipcode`

- is optional
- type: `string`

##### zipcode Type

`string`

## arianeeMembership

### Arianee Member

Company is part of Arianee Association

`arianeeMembership`

- is optional
- type: `string`
- defined in this schema

### arianeeMembership Type

`string`

## companyName

### Company Name

Name of the company

`companyName`

- is optional
- type: `string`
- defined in this schema

### companyName Type

`string`

## contacts

### Contacts

List of company contacts

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
| `type`   | string | Optional |

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

#### type

##### Type

`type`

- is optional
- type: `string`

##### type Type

`string`

## description

### Description

Brand / Company description in HTML (main language)

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

## descriptioni18n

### Other languages : description / external contents

Brand / Company description in HTML & external contents (specific language)

`descriptioni18n`

- is optional
- type: `object[]`
- defined in this schema

### descriptioni18n Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property           | Type   | Required |
| ------------------ | ------ | -------- |
| `description`      | string | Optional |
| `externalContents` | array  | Optional |
| `language`         | string | Optional |

#### description

##### Description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### externalContents

##### External Contents

List of External Contents such as website / documentation

`externalContents`

- is optional
- type: `object[]`

##### externalContents Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `title`  | string | Optional |
| `type`   | string | Optional |
| `url`    | string | Optional |

#### title

##### Title

`title`

- is optional
- type: `string`

##### title Type

`string`

#### type

##### Type

`type`

- is optional
- type: `string`

##### type Type

`string`

#### url

##### Url

`url`

- is optional
- type: `string`

##### url Type

`string`

#### language

##### Language

`language`

- is optional
- type: `string`

##### language Type

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

| Property | Type   | Required |
| -------- | ------ | -------- |
| `title`  | string | Optional |
| `type`   | string | Optional |
| `url`    | string | Optional |

#### title

##### Title

`title`

- is optional
- type: `string`

##### title Type

`string`

#### type

##### Type

`type`

- is optional
- type: `string`

##### type Type

`string`

#### url

##### Url

`url`

- is optional
- type: `string`

##### url Type

`string`

## name

### Brand Name

Name of the brand

`name`

- is optional
- type: `string`
- defined in this schema

### name Type

`string`

## parentCompanyName

### Parent Company Name

Name of parent company

`parentCompanyName`

- is optional
- type: `string`
- defined in this schema

### parentCompanyName Type

`string`

## pictures

### Pictures

List of Pictures

`pictures`

- is optional
- type: `object[]`
- defined in this schema

### pictures Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `hash`   | string | Optional |
| `type`   | string | Optional |
| `url`    | string | Optional |

#### hash

##### Image Hash

`hash`

- is optional
- type: `string`

##### hash Type

`string`

#### type

##### Type

`type`

- is optional
- type: `string`

##### type Type

`string`

#### url

##### URL

`url`

- is optional
- type: `string`

##### url Type

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
