const express = require('express');
const router = express.Router();

const main = require('./GoogleAnalytics');

router.get('/', async (req, res) => {
  try {
    const activeUsers = await main();
    return res.json({ trial: true, activeUsers });
  } catch (err) {
    return res.json({ trial: false, err });
  }
});

module.exports = router;
