module.exports = (app) => {
  const softwater = require("../controllers/softwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", softwater.create)

  // Get latest record
  router.get("/", softwater.getLatest)

  // Retrieve all records
  router.get("/all", softwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", softwater.findOne)

  // Update a record with id
  router.put("/:id", softwater.update)

  // Delete a record with id
  router.delete("/:id", softwater.delete)

  app.use("/api/softwater", router)
}
