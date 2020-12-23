require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");

//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const personRoutes = require("./routes/person");
const medicalRoutes = require("./routes/medical");
const notificationRoutes = require("./routes/notification");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", personRoutes);
app.use("/api", medicalRoutes);
app.use("/api", notificationRoutes);

//Starting a server
const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("Server running on port 80");
});

app.get("/", function (req, res) {
  res.send("Rahat Backend");
});
