module.exports = (app) => {
  const blowmoldglycolwater = require("../controllers/blowmoldglycolwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", blowmoldglycolwater.create)

  // Get latest record
  router.get("/", blowmoldglycolwater.getLatest)

  // Retrieve all records
  router.get("/all", blowmoldglycolwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", blowmoldglycolwater.findOne)

  // Update a record with id
  router.put("/:id", blowmoldglycolwater.update)

  // Delete a record with id
  router.delete("/:id", blowmoldglycolwater.delete)

  app.use("/api/blowmoldglycolwater", router)
}
