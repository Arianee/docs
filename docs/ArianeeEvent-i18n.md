# Arianee Event Schema

```
https://cert.arianee.org/version1/ArianeeEvent-i18n.json
```

Describing an Arianee Event such as servicing, auction, special event ...

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [ArianeeEvent-i18n.json](ArianeeEvent-i18n.json) |

# Arianee Event Properties

| Property                              | Type       | Required     | Nullable | Default                                                      | Defined by                  |
| ------------------------------------- | ---------- | ------------ | -------- | ------------------------------------------------------------ | --------------------------- |
| [\$schema](#schema)                   | `string`   | **Required** | No       | `"https://cert.arianee.org/version1/ArianeeEvent-i18n.json"` | Arianee Event (this schema) |
| [attributes](#attributes)             | `object[]` | Optional     | No       |                                                              | Arianee Event (this schema) |
| [currencyPrice](#currencyprice)       | `string`   | Optional     | No       | `""`                                                         | Arianee Event (this schema) |
| [description](#description)           | `string`   | Optional     | No       |                                                              | Arianee Event (this schema) |
| [eventType](#eventtype)               | `string`   | Optional     | No       |                                                              | Arianee Event (this schema) |
| [externalContents](#externalcontents) | `object[]` | Optional     | No       |                                                              | Arianee Event (this schema) |
| [i18n](#i18n)                         | `object[]` | Optional     | No       |                                                              | Arianee Event (this schema) |
| [language](#language)                 | `string`   | Optional     | No       |                                                              | Arianee Event (this schema) |
| [location](#location)                 | `string`   | Optional     | No       | `""`                                                         | Arianee Event (this schema) |
| [medias](#medias)                     | `object[]` | Optional     | No       |                                                              | Arianee Event (this schema) |
| [title](#title)                       | `string`   | Optional     | No       | `""`                                                         | Arianee Event (this schema) |
| [valuePrice](#valueprice)             | `string`   | Optional     | No       | `""`                                                         | Arianee Event (this schema) |
| `*`                                   | any        | Additional   | Yes      | this schema _allows_ additional properties                   |

## \$schema

### \$schema

`$schema`

- is **required**
- type: `string`
- default: `"https://cert.arianee.org/version1/ArianeeEvent-i18n.json"`
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

## currencyPrice

### Currency

Currency

`currencyPrice`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### currencyPrice Type

`string`

## description

### Description

`description`

- is optional
- type: `string`
- defined in this schema

### description Type

`string`

## eventType

### Type

Event type

`eventType`

- is optional
- type: `string`
- defined in this schema

### eventType Type

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

## i18n

### Other contents (international)

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
| `title`            | string | Optional |

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

#### title

##### Title

`title`

- is optional
- type: `string`

##### title Type

`string`

## language

### Language

`language`

- is optional
- type: `string`
- defined in this schema

### language Type

`string`

## location

### Location

Event Location

`location`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### location Type

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

## title

### Title

Event title

`title`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### title Type

`string`

## valuePrice

### Event price

Event price

`valuePrice`

- is optional
- type: `string`
- default: `""`
- defined in this schema

### valuePrice Type

`string`
