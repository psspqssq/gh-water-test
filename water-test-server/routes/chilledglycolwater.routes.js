module.exports = (app) => {
  const chilledglycolwater = require("../controllers/chilledglycolwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", chilledglycolwater.create)

  // Get latest record
  router.get("/", chilledglycolwater.getLatest)

  // Retrieve all records
  router.get("/all", chilledglycolwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", chilledglycolwater.findOne)

  // Update a record with id
  router.put("/:id", chilledglycolwater.update)

  // Delete a record with id
  router.delete("/:id", chilledglycolwater.delete)

  app.use("/api/chilledglycolwater", router)
}
