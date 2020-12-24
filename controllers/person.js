const Person = require("../models/person");

exports.getPersonById = (req, res, next, id) => {
  Person.findById(id).exec((err, per) => {
    if (err) {
      return res.status(400).json({
        error: "Person not Found",
      });
    }
    req.per = per;
    next();
  });
};

//Create a person
exports.createPerson = (req, res) => {
  const person = new Person(req.body);
  person.save((err, person) => {
    if (err) {
      res.status(400).json({
        error: "Failed to save PERSON in DB",
      });
    }
    res.json(person);
  });
};

//Get All Person
exports.getAllPerson = (req, res) => {
  Person.find({ userBy: req.params.userId })
  .populate("medicalCondition")
  .populate("userBy")
  .exec((err, person) => {
    if (err) {
      res.status(400).json({
        error: "No PERSONS are found",
      });
    }
    res.json(person);
  });
};

//Update a Person
exports.updatePerson = (req, res) => {
  Person.findByIdAndUpdate(
    req.params.personId,
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, person) => {
      if (err) {
        res.status(400).json({
          error: "Failed to update PERSON in DB",
        });
      }
      res.json(person);
    }
  );
};

//Delete a Person
exports.deletePerson = (req, res) => {
  const id = req.params.personId;
  Person.findByIdAndDelete(id, (err, person) => {
    if (err) {
      res.status(400).json({
        error: "Failed to delete PERSON from DB",
      });
    }
    res.json({
      message: "PERSON successfully deleted",
    });
  });
};
