module.exports = (app) => {
  const chilledglycolwater = require("../controllers/chilledglycolwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", auth, chilledglycolwater.create)

  // Get latest record
  router.get("/", auth, chilledglycolwater.getLatest)

  // Retrieve all records
  router.get("/all", auth, chilledglycolwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", auth, chilledglycolwater.findOne)

  // Update a record with id
  router.put("/:id", auth, chilledglycolwater.update)

  // Delete a record with id
  router.delete("/:id", auth, chilledglycolwater.delete)

  app.use("/api/chilledglycolwater", router)
}
