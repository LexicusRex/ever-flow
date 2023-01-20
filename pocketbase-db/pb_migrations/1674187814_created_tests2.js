migrate((db) => {
  const collection = new Collection({
    "id": "qh50ufc58mmc75w",
    "created": "2023-01-20 04:10:14.967Z",
    "updated": "2023-01-20 04:10:14.967Z",
    "name": "tests2",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "scjdymuw",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 4,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qh50ufc58mmc75w");

  return dao.deleteCollection(collection);
})
