migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1h8trxrmpo7or1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eg6tcnpl",
    "name": "x",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ccklobxn",
    "name": "y",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u1h8trxrmpo7or1")

  // remove
  collection.schema.removeField("eg6tcnpl")

  // remove
  collection.schema.removeField("ccklobxn")

  return dao.saveCollection(collection)
})
