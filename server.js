const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost/web_ta", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connection alive");
});

app.use(express.json());

//routers
const router = require("./routes/router.js");
app.use("/api/resturants", router);

app.listen(port, () => console.log(`listening on port ${port}!`));
