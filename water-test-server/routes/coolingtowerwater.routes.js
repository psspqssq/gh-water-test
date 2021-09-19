module.exports = (app) => {
  const coolingtowerwater = require("../controllers/coolingtowerwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", coolingtowerwater.create)

  // Get latest record
  router.get("/", coolingtowerwater.getLatest)

  // Retrieve all records
  router.get("/all", coolingtowerwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", coolingtowerwater.findOne)

  // Update a record with id
  router.put("/:id", coolingtowerwater.update)

  // Delete a record with id
  router.delete("/:id", coolingtowerwater.delete)

  app.use("/api/coolingtowerwater", router)
}
