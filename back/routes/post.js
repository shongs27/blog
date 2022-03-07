const express = require('express');
const router = express.Router();
// const User = require('../models/User');

router.post('/', (req, res) => {
  const { category, markdown } = req.body;
});

module.exports = router;
