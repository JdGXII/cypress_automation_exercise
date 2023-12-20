const petSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Pet",
    "type": "object",
    "required": ["id", "name", "photoUrls", "status"],
    "properties": {
      "id": {
        "type": "integer",
    },
      "category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
        },
          "name": {
            "type": "string"
          }
        },
        "required": ["id", "name"]
      },
      "name": {
        "type": "string"
      },
      "photoUrls": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "tags": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
            },
            "name": {
              "type": "string"
            }
          },
          "required": ["id", "name"]
        }
      },
      "status": {
        "type": "string",
        "enum": ["available", "pending", "sold"]
      }
    }
  };
  
  module.exports = petSchema;