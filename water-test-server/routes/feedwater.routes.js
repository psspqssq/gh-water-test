module.exports = (app) => {
  const feedwater = require("../controllers/feedwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", feedwater.create)

  // Get latest record
  router.get("/", feedwater.getLatest)

  // Retrieve all records
  router.get("/all", feedwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", feedwater.findOne)

  // Update a record with id
  router.put("/:id", feedwater.update)

  // Delete a record with id
  router.delete("/:id", feedwater.delete)

  app.use("/api/feedwater", router)
}
