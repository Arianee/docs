---
id: ArianeeAsset
title: Arianee Asset
---


 ```
{
  "$schema": "https://cert.arianee.org/version1/ArianeeAsset.json",
  "title": "Arianee Certificate",
  "type": "object",
  "properties": {
    "$schema": {
      "title": "$schema",
      "type": "string",
      "format": "uri",
      "default": "https://cert.arianee.org/version1/ArianeeAsset.json",
      "widget": "hidden"
    },
    "name": {
      "type": "string",
      "title": "Name",
      "format": "string",
      "default": ""
    },
    "v": {
      "type": "string",
      "title": "Version",
      "format": "string",
      "default": "0.1"
    },
    "serialnumber": {
      "type": "array",
      "title": "Serial Number",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "title": "Type",
            "widget": {
              "id": "select"
            },
            "oneOf": [
              {
                "description": "Serial Number",
                "enum": [
                  "serialnumber"
                ]
              },
              {
                "description": "Case Number",
                "enum": [
                  "casenumber"
                ]
              },
              {
                "description": "Movement Number",
                "enum": [
                  "movementnumber"
                ]
              }
            ]
          },
          "value": {
            "type": "string",
            "title": "Value",
            "widget": {
              "id": "string"
            }
          }
        }
      }
    },
    "brand": {
      "type": "string",
      "title": "Brand",
      "format": "string"
    },
    "model": {
      "type": "string",
      "title": "Model",
      "format": "string"
    },
    "description": {
      "type": "string",
      "title": "Description",
      "format": "string",
      "widget": {
        "id": "textarea"
      }
    },
    "type": {
      "type": "string",
      "title": "Type",
      "format": "string",
      "default": "SmartAsset"
    },
    "brandLogoHeader": {
      "type": "string",
      "title": "Brand Logo Header",
      "description": "url",
      "format": "string"
    },
    "picture": {
      "type": "string",
      "title": "Main picture",
      "description": "url",
      "format": "string",
      "buttons": [
        {
          "id": "file",
          "label": "Browse"
        }
      ]
    },
    "pictures": {
      "type": "array",
      "title": "Pictures",
      "items": {
        "type": "object",
        "properties": {
          "src": {
            "type": "string",
            "title": "Picture URL",
            "description": "url",
            "widget": {
              "id": "string"
            }
          }
        }
      }
    },
    "attributes": {
      "type": "array",
      "title": "Attributes",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "title": "Type",
            "widget": {
              "id": "select"
            },
            "oneOf": [
              {
                "description": "Color",
                "enum": [
                  "color"
                ]
              },
              {
                "description": "Material",
                "enum": [
                  "material"
                ]
              },
              {
                "description": "Printed",
                "enum": [
                  "printed"
                ]
              }
            ]
          },
          "value": {
            "type": "string",
            "title": "Value",
            "widget": {
              "id": "string"
            }
          }
        }
      }
    },
    "size": {
      "type": "array",
      "title": "Sizes",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "title": "Type",
            "widget": {
              "id": "select"
            },
            "oneOf": [
              {
                "description": "Height",
                "enum": [
                  "height"
                ]
              },
              {
                "description": "Width",
                "enum": [
                  "width"
                ]
              },
              {
                "description": "Depth",
                "enum": [
                  "depth"
                ]
              },
              {
                "description": "Size",
                "enum": [
                  "depth"
                ]
              }
            ]
          },
          "value": {
            "type": "string",
            "title": "Value",
            "widget": {
              "id": "string"
            }
          },
          "unit": {
            "type": "string",
            "title": "Unit",
            "widget": {
              "id": "select"
            },
            "oneOf": [
              {
                "description": "Inch",
                "enum": [
                  "in"
                ]
              },
              {
                "description": "Centimer",
                "enum": [
                  "cm"
                ]
              },
              {
                "description": "EU",
                "enum": [
                  "eu"
                ]
              },
              {
                "description": "UK",
                "enum": [
                  "uk"
                ]
              },
              {
                "description": "US",
                "enum": [
                  "us"
                ]
              }
            ]
          }
        }
      }
    },
    "socialmedia": {
      "type": "object",
      "title": "Social Media",
      "properties": {
        "facebook": {
          "type": "string",
          "minLength": 2,
          "maxLength": 40,
          "title": "Facebook",
          "description": "Facebook Page Id",
          "widget": {
            "id": "string"
          }
        },
        "instagram": {
          "type": "string",
          "minLength": 2,
          "maxLength": 40,
          "title": "Instagram",
          "description": "account",
          "widget": {
            "id": "string"
          }
        },
        "twitter": {
          "type": "string",
          "minLength": 2,
          "maxLength": 40,
          "title": "Twitter",
          "description": "account",
          "widget": {
            "id": "string"
          }
        }
      }
    },
    "externalContents": {
      "required": false,
      "type": "array",
      "title": "External Contents",
      "items": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
            "widget": {
              "id": "string"
            }
          },
          "url": {
            "type": "string",
            "title": "Url",
            "widget": {
              "id": "string"
            }
          },
          "backgroundColor": {
            "type": "string",
            "title": "Background Color",
            "widget": {
              "id": "color"
            }
          },
          "color": {
            "type": "string",
            "title": "Color",
            "widget": {
              "id": "color"
            }
          },
          "icon": {
            "type": "string",
            "title": "Icon",
            "description": "URL",
            "widget": {
              "id": "string"
            }
          }
        }
      }
    },
    "jsonSurcharger": {
      "type": "string",
      "title": "Json Surcharger",
      "description": "Json URL to surcharge this certificate overtime",
      "format": "string"
    }
  },
  "required": [
    "$schema"
  ]
}

 ```