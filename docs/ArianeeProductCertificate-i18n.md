

# Arianee Certificate Schema

The Arianee certificate specification uses [JSON Schema](https://json-schema.org). This schema document describes, and allows you to validate, Arianee certificates:

```
https://cert.arianee.org/version1/ArianeeProductCertificate-i18n.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                                                 |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [ArianeeProductCertificate-i18n.json](ArianeeProductCertificate-i18n.json) |

# Arianee Certificate Properties

| Property                                      | Type       | Required     | Nullable | Default                                                                   | Defined by                        |
| --------------------------------------------- | ---------- | ------------ | -------- | ------------------------------------------------------------------------- | --------------------------------- |
| [\$schema](#schema)                           | `string`   | **Required** | No       | `"https://cert.arianee.org/version1/ArianeeProductCertificate-i18n.json"` | Arianee Certificate (this schema) |
| [attributes](#attributes)                     | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [brandInternalId](#brandinternalid)           | `string`   | Optional     | No       | `""`                                                                      | Arianee Certificate (this schema) |
| [category](#category)                         | `string`   | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [description](#description)                   | `string`   | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [externalContents](#externalcontents)         | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [facilityId](#facilityid)                     | `string`   | Optional     | No       | `""`                                                                      | Arianee Certificate (this schema) |
| [gtin](#gtin)                                 | `string`   | Optional     | No       | `""`                                                                      | Arianee Certificate (this schema) |
| [i18n](#i18n)                                 | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [intended](#intended)                         | `string`   | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [language](#language)                         | `string`   | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [manufacturingCountry](#manufacturingcountry) | `string`   | Optional     | No       | `""`                                                                      | Arianee Certificate (this schema) |
| [materials](#materials)                       | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [medias](#medias)                             | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [model](#model)                               | `string`   | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [msrp](#msrp)                                 | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [name](#name)                                 | `string`   | Optional     | No       | `""`                                                                      | Arianee Certificate (this schema) |
| [productCertification](#productcertification) | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [serialnumber](#serialnumber)                 | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [size](#size)                                 | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [sku](#sku)                                   | `string`   | Optional     | No       | `""`                                                                      | Arianee Certificate (this schema) |
| [subBrand](#subbrand)                         | `string`   | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [subCategory](#subcategory)                   | `string`   | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| [subDescription](#subdescription)             | `object[]` | Optional     | No       |                                                                           | Arianee Certificate (this schema) |
| `*`                                           | any        | Additional   | Yes      | this schema _allows_ additional properties                                |

## \$schema

### \$schema

Arianee Certificate i18n

`$schema`

- is **required**
- type: `string`
- default: `"https://cert.arianee.org/version1/ArianeeProductCertificate-i18n.json"`
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

## brandInternalId

### Brand Internal ID

Product Internal Brand ID

`brandInternalId`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### brandInternalId Type

`string`

## category

### Category

`category`

- is optional
- type: `string`
- defined in this schema

### category Type

`string`

## description

### Description

Product Description

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

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

| Property | Type   | Required |
| -------- | ------ | -------- |
| `order`  | number | Optional |
| `title`  | string | Optional |
| `type`   | string | Optional |
| `url`    | string | Optional |

#### order

##### Order (number)

`order`

- is optional
- type: `number`

##### order Type

`number`

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

## facilityId

### Facility Identification number

Facility Identification in Open Apparel Registry (OAR) or GS1 database

`facilityId`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### facilityId Type

`string`

## gtin

### GTIN

Product GTIN

`gtin`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### gtin Type

`string`

## i18n

### Other languages : description / external contents

`i18n`

- is optional
- type: `object[]`
- defined in this schema

### i18n Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property           | Type   | Required |
| ------------------ | ------ | -------- |
| `description`      | string | Optional |
| `externalContents` | array  | Optional |
| `language`         | string | Optional |
| `subDescription`   | array  | Optional |

#### description

##### Description

`description`

- is optional
- type: `string`

##### description Type

`string`

#### externalContents

##### External Contents

`externalContents`

- is optional
- type: `object[]`

##### externalContents Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `order`  | number | Optional |
| `title`  | string | Optional |
| `type`   | string | Optional |
| `url`    | string | Optional |

#### order

##### Order (number)

`order`

- is optional
- type: `number`

##### order Type

`number`

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

#### subDescription

##### Description (more)

`subDescription`

- is optional
- type: `object[]`

##### subDescription Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property  | Type   | Required |
| --------- | ------ | -------- |
| `content` | string | Optional |
| `order`   | number | Optional |
| `title`   | string | Optional |
| `type`    | string | Optional |

#### content

##### Content

`content`

- is optional
- type: `string`

##### content Type

`string`

#### order

##### Order (number)

`order`

- is optional
- type: `number`

##### order Type

`number`

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

## intended

### Intended

`intended`

- is optional
- type: `string`
- defined in this schema

### intended Type

`string`

## language

### Language

`language`

- is optional
- type: `string`
- defined in this schema

### language Type

`string`

## manufacturingCountry

### Country (manufacturing)

Country of manufacture in final assembly stage. (ISO 3166 alpha-3)

`manufacturingCountry`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### manufacturingCountry Type

`string`

## materials

### Materials

`materials`

- is optional
- type: `object[]`
- defined in this schema

### materials Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property      | Type   | Required |
| ------------- | ------ | -------- |
| `material`    | string | Optional |
| `pourcentage` | string | Optional |
| `value`       | string | Optional |

#### material

##### Material

`material`

- is optional
- type: `string`

##### material Type

`string`

#### pourcentage

##### Pourcentage

Pourcentage without % (numeric)

`pourcentage`

- is optional
- type: `string`

##### pourcentage Type

`string`

#### value

##### Value

`value`

- is optional
- type: `string`

##### value Type

`string`

## medias

### Medias

List of Medias (picture, video, ...)

`medias`

- is optional
- type: `object[]`
- defined in this schema

### medias Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property    | Type   | Required |
| ----------- | ------ | -------- |
| `hash`      | string | Optional |
| `mediaType` | string | Optional |
| `order`     | number | Optional |
| `type`      | string | Optional |
| `url`       | string | Optional |

#### hash

##### Media Hash

`hash`

- is optional
- type: `string`

##### hash Type

`string`

#### mediaType

##### Media Type

`mediaType`

- is optional
- type: `string`

##### mediaType Type

`string`

#### order

##### Media Order (number)

`order`

- is optional
- type: `number`

##### order Type

`number`

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

## model

### Model

Product model

`model`

- is optional
- type: `string`
- defined in this schema

### model Type

`string`

## msrp

### Manufacturers suggested retail price

`msrp`

- is optional
- type: `object[]`
- defined in this schema

### msrp Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property      | Type   | Required | Default |
| ------------- | ------ | -------- | ------- |
| `currency`    | string | Optional | `""`    |
| `msrp`        | string | Optional | `""`    |
| `msrpCountry` | string | Optional | `""`    |

#### currency

##### Currency

Currency

`currency`

- is optional
- type: `string`
- default: `""`

##### currency Type

`string`

#### msrp

##### MSRP

Manufacturers suggested retail price (number)

`msrp`

- is optional
- type: `string`
- default: `""`

##### msrp Type

`string`

#### msrpCountry

##### Country (msrp)

Country of Intended Original Sale (ISO 3166 alpha-3)

`msrpCountry`

- is optional
- type: `string`
- default: `""`

##### msrpCountry Type

`string`

## name

### Name

Product Name

`name`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### name Type

`string`

## productCertification

### Product Certifications &amp; Compliance

List any certifications that the product has received.

`productCertification`

- is optional
- type: `object[]`
- defined in this schema

### productCertification Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property | Type   | Required |
| -------- | ------ | -------- |
| `name`   | string | Optional |

#### name

##### Name

`name`

- is optional
- type: `string`

##### name Type

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

## sku

### SKU

Product Sku

`sku`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### sku Type

`string`

## subBrand

### Sub Brand

Sub Brand

`subBrand`

- is optional
- type: `string`
- defined in this schema

### subBrand Type

`string`

## subCategory

### Sub Category

`subCategory`

- is optional
- type: `string`
- defined in this schema

### subCategory Type

`string`

## subDescription

### Description (more)

`subDescription`

- is optional
- type: `object[]`
- defined in this schema

### subDescription Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property  | Type   | Required |
| --------- | ------ | -------- |
| `content` | string | Optional |
| `order`   | number | Optional |
| `title`   | string | Optional |
| `type`    | string | Optional |

#### content

##### Content

`content`

- is optional
- type: `string`

##### content Type

`string`

#### order

##### Order (number)

`order`

- is optional
- type: `number`

##### order Type

`number`

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
