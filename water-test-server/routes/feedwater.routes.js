module.exports = (app) => {
  const feedwater = require("../controllers/feedwater.controller.js")
  const auth = require("../middleware/auth")
  var router = require("express").Router()

  // Create a new record
  router.post("/", auth, feedwater.create)

  // Get latest record
  router.get("/", auth, feedwater.getLatest)

  // Retrieve all records
  router.get("/all", auth, feedwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", auth, feedwater.findOne)

  // Update a record with id
  router.put("/:id", auth, feedwater.update)

  // Delete a record with id
  router.delete("/:id", auth, feedwater.delete)

  app.use("/api/feedwater", router)
}
