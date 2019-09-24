# Arianee Certificate Schema

```
https://cert.arianee.org/version1/ArianeeAsseti18n.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [ArianeeAsset-i18n.json](ArianeeAsset-i18n.json) |

# Arianee Certificate Properties

| Property                              | Type       | Required     | Nullable | Default                                                     | Defined by                        |
| ------------------------------------- | ---------- | ------------ | -------- | ----------------------------------------------------------- | --------------------------------- |
| [\$schema](#schema)                   | `string`   | **Required** | No       | `"https://cert.arianee.org/version1/ArianeeAsseti18n.json"` | Arianee Certificate (this schema) |
| [attributes](#attributes)             | `object[]` | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [brand](#brand)                       | `string`   | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [brandLogoHeader](#brandlogoheader)   | `string`   | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [description](#description)           | `string`   | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [descriptioni18n](#descriptioni18n)   | `object[]` | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [externalContents](#externalcontents) | `object[]` | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [jsonSurcharger](#jsonsurcharger)     | `string`   | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [model](#model)                       | `string`   | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [name](#name)                         | `string`   | Optional     | No       | `""`                                                        | Arianee Certificate (this schema) |
| [picture](#picture)                   | `string`   | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [pictures](#pictures)                 | `object[]` | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [serialnumber](#serialnumber)         | `object[]` | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [size](#size)                         | `object[]` | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [socialmedia](#socialmedia)           | `object`   | Optional     | No       |                                                             | Arianee Certificate (this schema) |
| [type](#type)                         | `string`   | Optional     | No       | `"SmartAsset"`                                              | Arianee Certificate (this schema) |
| [v](#v)                               | `string`   | Optional     | No       | `"0.1"`                                                     | Arianee Certificate (this schema) |
| `*`                                   | any        | Additional   | Yes      | this schema _allows_ additional properties                  |

## \$schema

### \$schema

`$schema`

- is **required**
- type: `string`
- default: `"https://cert.arianee.org/version1/ArianeeAsseti18n.json"`
- defined in this schema

### \$schema Type

`string`

## attributes

### Attributes

`attributes`

- is optional
- type: `object[]`
- defined in this schema

### attributes Type

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

## brand

### Brand

`brand`

- is optional
- type: `string`
- defined in this schema

### brand Type

`string`

## brandLogoHeader

### Brand Logo Header

url

`brandLogoHeader`

- is optional
- type: `string`
- defined in this schema

### brandLogoHeader Type

`string`

## description

### Description

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

## descriptioni18n

### Description (languages)

`descriptioni18n`

- is optional
- type: `object[]`
- defined in this schema

### descriptioni18n Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property   | Type   | Required |
| ---------- | ------ | -------- |
| `content`  | string | Optional |
| `language` | string | Optional |

#### content

##### Content

`content`

- is optional
- type: `string`

##### content Type

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

## jsonSurcharger

### Json Surcharger

Json URL to surcharge this certificate overtime

`jsonSurcharger`

- is optional
- type: `string`
- defined in this schema

### jsonSurcharger Type

`string`

## model

### Model

`model`

- is optional
- type: `string`
- defined in this schema

### model Type

`string`

## name

### Name

`name`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### name Type

`string`

## picture

### Main picture

url

`picture`

- is optional
- type: `string`
- defined in this schema

### picture Type

`string`

## pictures

### Pictures

`pictures`

- is optional
- type: `object[]`
- defined in this schema

### pictures Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `src`    | string | Optional |

#### src

##### Picture URL

url

`src`

- is optional
- type: `string`

##### src Type

`string`

## serialnumber

### Serial Number

`serialnumber`

- is optional
- type: `object[]`
- defined in this schema

### serialnumber Type

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

## size

### Sizes

`size`

- is optional
- type: `object[]`
- defined in this schema

### size Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `type`   | string | Optional |
| `unit`   | string | Optional |
| `value`  | string | Optional |

#### type

##### Type

`type`

- is optional
- type: `string`

##### type Type

`string`

#### unit

##### Unit

`unit`

- is optional
- type: `string`

##### unit Type

`string`

#### value

##### Value

`value`

- is optional
- type: `string`

##### value Type

`string`

## socialmedia

### Social Media

`socialmedia`

- is optional
- type: `object`
- defined in this schema

### socialmedia Type

`object` with following properties:

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| `facebook`  | string | Optional |
| `instagram` | string | Optional |
| `twitter`   | string | Optional |

#### facebook

##### Facebook

Facebook Page Id

`facebook`

- is optional
- type: `string`

##### facebook Type

`string`

- minimum length: 2 characters
- maximum length: 40 characters

#### instagram

##### Instagram

account

`instagram`

- is optional
- type: `string`

##### instagram Type

`string`

- minimum length: 2 characters
- maximum length: 40 characters

#### twitter

##### Twitter

account

`twitter`

- is optional
- type: `string`

##### twitter Type

`string`

- minimum length: 2 characters
- maximum length: 40 characters

## type

### Type

`type`

- is optional
- type: `string`
- default: `"SmartAsset"`
- defined in this schema

### type Type

`string`

## v

### Version

`v`

- is optional
- type: `string`
- default: `"0.1"`
- defined in this schema

### v Type

`string`
