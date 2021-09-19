module.exports = (app) => {
  const rawwater = require("../controllers/rawwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", rawwater.create)

  // Get latest record
  router.get("/", rawwater.getLatest)

  // Retrieve all records
  router.get("/all", rawwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", rawwater.findOne)

  // Update a record with id
  router.put("/:id", rawwater.update)

  // Delete a record with id
  router.delete("/:id", rawwater.delete)

  app.use("/api/rawwater", router)
}
