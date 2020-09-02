const express = require("express");
var cors = require("cors");
var path = require("path");
const app = express();
const axios = require("axios");
const { send } = require("process");
const { response } = require("express");
app.use(cors());
//app.use("/static", express.static("public"));

const PORT = process.env.PORT || 8000;

//get file
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

//getting latest update
app.get("/country-date/:country", (req, res) => {
  "Access-Control-Allow-Origin", req.headers.origin;
  const { country } = req.params;
  const { date } = req.query;
  const url = `https://covid19-api.org/api/status/${country}?date=${date}`;
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

app.get("/difference-by-country/:country", (req, res) => {
  const { country } = req.params;
  const url = `https://covid19-api.org/api/diff/${country}`;
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

app.get("/timeline-by-country/:country", (req, res) => {
  const { country } = req.params;
  const url = `https://covid19-api.org/api/diff/${country}`;
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

app.get("/prediction-by-country/:country", (req, res) => {
  const { country } = req.params;
  const url = `https://covid19-api.org/api/prediction/${country}`;
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
app.listen(PORT, () => {
  console.log("Listening at Port:8000");
});
