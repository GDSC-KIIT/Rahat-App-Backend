const express = require("express");
const router = express.Router();

const { sendNotification, sendDataNotification, sendNotificationToAll } = require("../controllers/notification");

//All Routes
router.post("/notification/allDevice", sendNotificationToAll);

module.exports = router;