const Medical = require("../models/medical");

exports.getMedicalById = (req, res, next, id) => {
  Medical.findById(id).exec((err, medical) => {
    if (err) {
      return res.status(400).json({
        error: "Medical not Found",
      });
    }
    req.medical = medical;
    next();
  });
};

exports.createMedical = (req, res) => {
  const medical = new Medical(req.body);
  medical.save((err, medical) => {
    if (err) {
      res.status(400).json({
        error: "Failed to save Medical in DB",
      });
    }
    res.json(medical);
  });
};

exports.getAllMedicals = (req, res) => {
  Medical.find().exec((err, medical) => {
    if (err) {
      res.status(400).json({
        error: "No MEDICAL are found",
      });
    }
    res.json(medical);
  });
};

exports.updateMedical = (req, res) => {
  Medical.findByIdAndUpdate(
    req.params.medicalId,
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, medical) => {
      if (err) {
        res.status(400).json({
          error: "Failed to update MEDICAL in DB",
        });
      }
      res.json(medical);
    }
  );
};

exports.deleteMedical = (req, res) => {
  const id = req.params.medicalId;
  Medical.findByIdAndDelete(id, (err, medical) => {
    if (err) {
      res.status(400).json({
        error: "Failed to delete MEDICAL from DB",
      });
    }
    res.json({
      message: "MEDICAL successfully deleted",
    });
  });
};
