const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.patch('/upLike', (req, res) => {
  Post.findOneAndUpdate(
    { _id: req.body },
    { $inc: { likes: 1 } },
    { new: true }
  ).exec((err, post) => {
    if (err) return res.status(400).send({ trial: false });

    return res.status(200).send({ trial: true, post });
  });
});

router.patch('/unLike', (req, res) => {
  Post.findOneAndUpdate(
    { _id: req.body },
    { $inc: { likes: -1 } },
    { new: true }
  ).exec((err, post) => {
    if (err) return res.status(400).send({ trial: false });
    return res.status(200).send({ trial: true, post });
  });
});

module.exports = router;
