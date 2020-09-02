const express = require("express");
var cors = require("cors");
var path = require("path");
const app = express();
const axios = require("axios");
const { send } = require("process");
const { response } = require("express");
app.use(cors());
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../index.html"));
});

//getting latest update
app.get("/latest-status", (req, res) => {
  const url = "https://covid19-api.org/api/status";
  axios
    .get(url)
    .then((response) => {
      res.json(response.data);
      //   console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

//listening at port 8000
app.listen(8000, () => {
  console.log("Listening at Port:8000");
});
