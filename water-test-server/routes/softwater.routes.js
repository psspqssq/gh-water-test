module.exports = (app) => {
  const softwater = require("../controllers/softwater.controller.js")
  const auth = require("../middleware/auth")

  var router = require("express").Router()

  // Create a new record
  router.post("/", auth, softwater.create)

  // Get latest record
  router.get("/", auth, softwater.getLatest)

  // Retrieve all records
  router.get("/all", auth, softwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", auth, softwater.findOne)

  // Update a record with id
  router.put("/:id", auth, softwater.update)

  // Delete a record with id
  router.delete("/:id", auth, softwater.delete)

  app.use("/api/softwater", router)
}
