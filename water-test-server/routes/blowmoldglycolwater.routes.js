module.exports = (app) => {
  const blowmoldglycolwater = require("../controllers/blowmoldglycolwater.controller.js")

  var router = require("express").Router()

  // Create a new record
  router.post("/", auth, blowmoldglycolwater.create)

  // Get latest record
  router.get("/", auth, blowmoldglycolwater.getLatest)

  // Retrieve all records
  router.get("/all", auth, blowmoldglycolwater.findAll)

  // Retrieve a single record with id
  router.get("/:id", auth, blowmoldglycolwater.findOne)

  // Update a record with id
  router.put("/:id", auth, blowmoldglycolwater.update)

  // Delete a record with id
  router.delete("/:id", auth, blowmoldglycolwater.delete)

  app.use("/api/blowmoldglycolwater", router)
}
