const express = require('express');
const router = express.Router();
const User = require('../models/User');

// /login
router.post('/', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    //유저가 없으면 실패
    if (!user) return res.json({ trial: false, err });

    //패스워드가 같다면 토큰을 만들어준다
    if (user.password === req.body.password) {
      user.generateToken((err, user) => {
        if (err) return res.json({ trial: false, err });

        return res
          .status(200)
          .json({ trial: true, accessToken: user.token, userId: user._id });
        // res.cookie('accessToken', user.token).status(200).json({ try: true });
        //   .json({ try: true, userId: user._id });
      });
      //패스워드가 달라도 실패
    } else return res.json({ trial: false, err });
  });
});

module.exports = router;
