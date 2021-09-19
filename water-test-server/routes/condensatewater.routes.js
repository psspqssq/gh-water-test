module.exports = (app) => {
  const condensatewater = require("../controllers/condensatewater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", condensatewater.create)

  // Get latest record
  router.get("/", condensatewater.getLatest)

  // Retrieve all records
  router.get("/all", condensatewater.findAll)

  // Retrieve a single record with id
  router.get("/:id", condensatewater.findOne)

  // Update a record with id
  router.put("/:id", condensatewater.update)

  // Delete a record with id
  router.delete("/:id", condensatewater.delete)

  app.use("/api/condensatewater", router)
}
