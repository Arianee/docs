# Event default template Schema

```
https://cert.arianee.org/version1/ArianeeEventi18n.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                                       |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ------------------------------------------------ |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [ArianeeEvent-i18n.json](ArianeeEvent-i18n.json) |

# Event default template Properties

| Property                              | Type       | Required     | Nullable | Default                                                     | Defined by                           |
| ------------------------------------- | ---------- | ------------ | -------- | ----------------------------------------------------------- | ------------------------------------ |
| [\$schema](#schema)                   | `string`   | **Required** | No       | `"https://cert.arianee.org/version1/ArianeeEventi18n.json"` | Event default template (this schema) |
| [attributes](#attributes)             | `object[]` | Optional     | No       |                                                             | Event default template (this schema) |
| [description](#description)           | `string`   | Optional     | No       |                                                             | Event default template (this schema) |
| [descriptioni18n](#descriptioni18n)   | `object[]` | Optional     | No       |                                                             | Event default template (this schema) |
| [eventType](#eventtype)               | `string`   | Optional     | No       |                                                             | Event default template (this schema) |
| [externalContents](#externalcontents) | `object[]` | Optional     | No       |                                                             | Event default template (this schema) |
| [location](#location)                 | `string`   | Optional     | No       | `""`                                                        | Event default template (this schema) |
| [title](#title)                       | `string`   | Optional     | No       | `""`                                                        | Event default template (this schema) |
| [titlei18n](#titlei18n)               | `object[]` | Optional     | No       |                                                             | Event default template (this schema) |
| `*`                                   | any        | Additional   | Yes      | this schema _allows_ additional properties                  |

## \$schema

### \$schema

`$schema`

- is **required**
- type: `string`
- default: `"https://cert.arianee.org/version1/ArianeeEventi18n.json"`
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

pictures / files

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
| `url`    | string | Optional |

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

## titlei18n

### Title (languages)

`titlei18n`

- is optional
- type: `object[]`
- defined in this schema

### titlei18n Type

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
