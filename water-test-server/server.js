const express = require("express")
const cors = require("cors")
require("dotenv").config()
var bodyParser = require("body-parser")

const app = express()

var corsOptions = {
  origin: "*",
}

const db = require("./models")
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!")
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err)
    process.exit()
  })

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Water tests server running with nodemon" })
})

require("./routes/blowmoldglycolwater.routes")(app)
require("./routes/boilerwater.routes")(app)
require("./routes/chilledglycolwater.routes")(app)
require("./routes/condensatewater.routes")(app)
require("./routes/coolingtowerwater.routes")(app)
require("./routes/feedwater.routes")(app)
require("./routes/rawwater.routes")(app)
require("./routes/softwater.routes")(app)
require("./routes/user.routes")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080
const IP = process.env.IP || "127.0.0.1"
app.listen(PORT, IP, () => {
  console.log(`Server is running on ${IP}:${PORT}.`)
})
