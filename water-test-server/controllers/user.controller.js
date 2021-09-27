const db = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = db.user

exports.hello = (req, res) => {
  res.status(201).send({ message: "Hello!" })
}

exports.register = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" })
    return
  }
  console.log("I exist")
  const { username, password, user_type, email } = req.body

  if (!(email && password && user_type && email)) {
    res.status(400).send("All inputs are required")
  }

  encryptedPassword = await bcrypt.hash(password, 10)

  const user = new User({
    username: username,
    password: encryptedPassword,
    user_type: user_type,
    email: email.toLowerCase(),
  })
  const token = jwt.sign({ user_id: user._id, username }, process.env.TOKEN, {
    expiresIn: "2h",
  })
  user.token = token
  user
    .save(user)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user record.",
      })
    })
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!(username && password)) {
      res.status(400).send("all inputs are required")
    }
    const user = await User.findOne({ username })
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user_id: user._id, username }, process.env.TOKEN, {
        expiresIn: "2h",
      })

      // save user token
      user.token = token

      // user
      res.status(200).json(user)
    }
    res.status(400).send("Invalid Credentials")
  } catch (err) {
    console.log(err)
  }
}
