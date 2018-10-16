// StateRoute.js

const express = require('express');
const app = express();
const router = express.Router();


const State = require('../models/State');

var query = { _id: '123456789012'};

router.route('/save').post(function (req, res) {

  State.findOneAndUpdate(query, req.body, { upsert: true }, function (err, doc) {
    if (err) return res.status(500).send({ error: err });
    return res.send(req.body.state);
  });
});

router.route('/load').get(function (req, res) {
  State.findById(query, function (err, state) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(state);
    }
  });
});

module.exports = router;