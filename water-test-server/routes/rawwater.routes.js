module.exports = (app) => {
  const rawwater = require("../controllers/rawwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", auth, rawwater.create)

  // Get latest record
  router.get("/", auth, rawwater.getLatest)

  // Retrieve all records
  router.get("/all", auth, rawwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", auth, rawwater.findOne)

  // Update a record with id
  router.put("/:id", auth, rawwater.update)

  // Delete a record with id
  router.delete("/:id", auth, rawwater.delete)

  app.use("/api/rawwater", router)
}
