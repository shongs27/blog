const express = require('express');
const router = express.Router();

const main = require('./GoogleAnalytics');

router.get('/', async (req, res) => {
  try {
    const response = await main();

    //rows, totals만 조작해서 돌려주자
    const { rows, totals } = response;

    return res.json({ trial: true, rows, totals });
  } catch (err) {
    return res.json({ trial: false, err });
  }
});

module.exports = router;
