module.exports = (app) => {
  const user = require("../controllers/user.controller.js")

  var router = require("express").Router()
  router.get("/", user.hello)
  router.post("/register", user.register)

  router.post("/login", user.login)
  app.use("/api/user", router)
}
