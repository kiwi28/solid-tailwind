migrate((db) => {
  const collection = new Collection({
    "id": "vvczauv7lox21kf",
    "created": "2023-04-01 19:07:55.454Z",
    "updated": "2023-04-01 19:07:55.454Z",
    "name": "project",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mlefwplp",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("vvczauv7lox21kf");

  return dao.deleteCollection(collection);
})
