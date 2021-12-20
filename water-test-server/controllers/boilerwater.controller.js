const db = require("../models");
const Boiler = db.boilerwater;

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const boiler = new Boiler({
    date: req.body.date,
    alkalinity: req.body.alkalinity,
    ph: req.body.ph,
    conductivity: req.body.conductivity,
    sulfites: req.body.sulfites,
    blowdown: req.body.blowdown,
    boilernumber: req.body.boilernumber,
  });

  boiler
    .save(boiler)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the record.",
      });
    });
};

exports.getLatest = (req, res) => {
  Boiler.findOne()
    .sort({ field: "asc", _id: -1 })
    .limit(1)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      });
    });
};

exports.findAll = (req, res) => {
  const beginDate = req.query.beginDate;
  const endDate = req.query.endDate;
  var condition = beginDate ? { createdAt: { $gte: beginDate, $lt: endDate } } : {};

  Boiler.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  var condition = id ? { _id: id } : {};

  Boiler.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  condition = id ? { _id: id } : {};
  Boiler.findOneAndUpdate(
    condition,
    { $set: req.body },
    {
      new: true,
    }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving records.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Boiler.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete record with id=${id}. Maybe record was not found!`,
        });
      } else {
        res.send({
          message: "Record was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete record with id=" + id,
      });
    });
};
