module.exports = (app) => {
  const boilerwater = require("../controllers/boilerwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", auth, boilerwater.create)

  // Get latest record
  router.get("/", auth, boilerwater.getLatest)

  // Retrieve all records
  router.get("/all", auth, boilerwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", auth, boilerwater.findOne)

  // Update a record with id
  router.put("/:id", auth, boilerwater.update)

  // Delete a record with id
  router.delete("/:id", auth, boilerwater.delete)

  app.use("/api/boilerwater", router)
}
