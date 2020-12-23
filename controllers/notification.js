var admin = require("firebase-admin");

exports.sendNotificationToAll = (req, res) => {
  var payload = {
    notification: {
      title: req.body.title,
      body: req.body.message,
    },
  };

  var topic = req.body.topic;

  admin
    .messaging()
    .sendToTopic(topic, payload)
    .then(function (response) {
      return res.json({
        message: "Successfully Send",
      });
    })
    .catch(function (error) {
      return res.json({
        message: "Not Send",
      });
    });
};
