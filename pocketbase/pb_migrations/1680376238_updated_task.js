migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1h8trxrmpo7or1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "35rgqic6",
    "name": "color",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1h8trxrmpo7or1")

  // remove
  collection.schema.removeField("35rgqic6")

  return dao.saveCollection(collection)
})
