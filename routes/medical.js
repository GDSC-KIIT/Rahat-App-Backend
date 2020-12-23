const express = require("express");
const router = express.Router();

const {
  getMedicalById,
  createMedical,
  getAllMedicals,
  updateMedical,
  deleteMedical,
} = require("../controllers/medical");

router.param("medicalId", getMedicalById);

router.post("/create/medical", createMedical);
router.get("/get/medical", getAllMedicals);
router.put("/update/medical/:medicalId", updateMedical);
router.delete("/delete/medical/:medicalId", deleteMedical);

module.exports = router;
