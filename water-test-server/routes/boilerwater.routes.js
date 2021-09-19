module.exports = (app) => {
  const boilerwater = require("../controllers/boilerwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", boilerwater.create)

  // Get latest record
  router.get("/", boilerwater.getLatest)

  // Retrieve all records
  router.get("/all", boilerwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", boilerwater.findOne)

  // Update a record with id
  router.put("/:id", boilerwater.update)

  // Delete a record with id
  router.delete("/:id", boilerwater.delete)

  app.use("/api/boilerwater", router)
}
