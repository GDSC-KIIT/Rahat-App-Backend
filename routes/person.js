const express = require("express");
const router = express.Router();

const {
  getPersonById,
  createPerson,
  getAllPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/person");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);
router.param("personId", getPersonById);

//Create a person
router.post("/create/person", isSignedIn, createPerson);


//Get All person
router.get("/get/persons", isSignedIn, getAllPerson);

//Update persons
router.put(
  "/update/person/:personId/:userId",
  isSignedIn,
  isAuthenticated,
  updatePerson
);

//Delete Person
router.delete(
  "/delete/person/:personId/:userId",
  isSignedIn,
  deletePerson
);

module.exports = router;
