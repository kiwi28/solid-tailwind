migrate((db) => {
  const collection = new Collection({
    "id": "u1h8trxrmpo7or1",
    "created": "2023-04-01 19:09:23.559Z",
    "updated": "2023-04-01 19:09:23.559Z",
    "name": "task",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "if8mwcce",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "e84mqnr3",
        "name": "description",
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
        "id": "vszqwupk",
        "name": "project",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "vvczauv7lox21kf",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("u1h8trxrmpo7or1");

  return dao.deleteCollection(collection);
})
