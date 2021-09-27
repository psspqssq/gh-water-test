module.exports = (app) => {
  const condensatewater = require("../controllers/condensatewater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", auth, condensatewater.create)

  // Get latest record
  router.get("/", auth, condensatewater.getLatest)

  // Retrieve all records
  router.get("/all", auth, condensatewater.findAll)

  // Retrieve a single record with id
  router.get("/:id", auth, condensatewater.findOne)

  // Update a record with id
  router.put("/:id", auth, condensatewater.update)

  // Delete a record with id
  router.delete("/:id", auth, condensatewater.delete)

  app.use("/api/condensatewater", router)
}
