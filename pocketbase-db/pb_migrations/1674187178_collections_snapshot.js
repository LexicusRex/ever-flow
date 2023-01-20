migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-01-20 02:03:13.255Z",
      "updated": "2023-01-20 03:51:44.404Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null
          }
        },
        {
          "system": false,
          "id": "yucramlg",
          "name": "role",
          "type": "select",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "admin",
              "tutor",
              "student"
            ]
          }
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 5,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "qocor9j9c6tje3x",
      "created": "2023-01-20 02:05:44.454Z",
      "updated": "2023-01-20 03:51:44.405Z",
      "name": "groups",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "fqmbzsiu",
          "name": "group_name",
          "type": "text",
          "required": true,
          "unique": true,
          "options": {
            "min": 5,
            "max": 50,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "lnzcm5ul",
          "name": "members",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": null,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false
          }
        },
        {
          "system": false,
          "id": "6binuawq",
          "name": "tutor",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false
          }
        }
      ],
      "listRule": "members.id ?= @request.auth.id",
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "jq86tpvpet2n2ne",
      "created": "2023-01-20 03:21:34.347Z",
      "updated": "2023-01-20 03:51:44.405Z",
      "name": "tutorials",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "hwgkv6nd",
          "name": "tutorial_id",
          "type": "text",
          "required": true,
          "unique": true,
          "options": {
            "min": 4,
            "max": 50,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "bpkhl94a",
          "name": "tutor",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false
          }
        },
        {
          "system": false,
          "id": "uhbmjlw8",
          "name": "groups",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": null,
            "collectionId": "qocor9j9c6tje3x",
            "cascadeDelete": false
          }
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
