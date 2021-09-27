const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose

db.url = process.env.DBURL
db.user = require("./user.model.js")(mongoose)
db.softwater = require("./softwater.model.js")(mongoose)
db.feedwater = require("./feedwater.model.js")(mongoose)
db.boilerwater = require("./boilerwater.model.js")(mongoose)
db.condensatewater = require("./condensatewater.model.js")(mongoose)
db.rawwater = require("./rawwater.model.js")(mongoose)
db.coolingtowerwater = require("./coolingtowerwater.model.js")(mongoose)
db.chilledglycolwater = require("./chilledglycolwater.model.js")(mongoose)
db.blowmoldglycolwater = require("./blowmoldglycolwater.model.js")(mongoose)

module.exports = db
