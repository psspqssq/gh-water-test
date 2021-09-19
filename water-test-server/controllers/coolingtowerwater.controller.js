const db = require("../models")
const CoolingTowerWater = db.coolingtowerwater

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" })
    return
  }

  const coolingtowerwater = new CoolingTowerWater({
    date: req.body.date,
    hardness: req.body.hardness,
    conductivity: req.body.conductivity,
    ph: req.body.ph,
    ptsa: req.body.ptsa,
    freechlorine: req.body.freechlorine,
    location: req.body.location,
  })

  coolingtowerwater
    .save(coolingtowerwater)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the chilled glycol water record.",
      })
    })
}

exports.getLatest = (req, res) => {
  CoolingTowerWater.findOne()
    .sort({ field: "asc", _id: -1 })
    .limit(1)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      })
    })
}

exports.findAll = (req, res) => {
  const beginDate = req.query.beginDate
  const endDate = req.query.endDate
  var condition = beginDate ? { createdAt: { $gte: beginDate, $lt: endDate } } : {}

  CoolingTowerWater.find(condition)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  var condition = id ? { _id: id } : {}

  CoolingTowerWater.find(condition)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  condition = id ? { _id: id } : {}
  CoolingTowerWater.findOneAndUpdate(
    condition,
    { $set: req.body },
    {
      new: true,
    }
  )
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  CoolingTowerWater.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete record with id=${id}. Maybe record was not found!`,
        })
      } else {
        res.send({
          message: "Record was deleted successfully!",
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete record with id=" + id,
      })
    })
}
