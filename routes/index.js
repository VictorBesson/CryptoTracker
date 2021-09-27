var express = require("express");
var router = express.Router();
const axios = require("axios");

//init request param
const requestOption = {
  method: "GET",
  url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  headers: {
    "X-CMC_PRO_API_KEY": process.env.API_KEY,
  },
};

/* GET home page. */
router.get("/", function (req, res, next) {
  let crypto;
  axios(requestOption)
    .then((response) => {
      console.log(response.data);
      crypto = response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  res.render("index", { title: "Express", crypto: crypto });
});

module.exports = router;
