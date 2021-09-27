module.exports = (app) => {
  const coolingtowerwater = require("../controllers/coolingtowerwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", auth, coolingtowerwater.create)

  // Get latest record
  router.get("/", auth, coolingtowerwater.getLatest)

  // Retrieve all records
  router.get("/all", auth, coolingtowerwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", auth, coolingtowerwater.findOne)

  // Update a record with id
  router.put("/:id", auth, coolingtowerwater.update)

  // Delete a record with id
  router.delete("/:id", auth, coolingtowerwater.delete)

  app.use("/api/coolingtowerwater", router)
}
