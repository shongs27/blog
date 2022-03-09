const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/:category/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).exec((err, post) => {
    if (err) return res.status(400).send(err);

    res.status(200).json({ trial: true, post });
  });
});
router.get('/popularPosts', (req, res) => {
  Post.find()
    .where('likes')
    .gt(1)
    .sort({ likes: -1 })
    .limit(5)
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);

      res.status(200).json({ trial: true, posts });
    });
});

router.get('/recentPosts', (req, res) => {
  Post.find()
    .limit(5)
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);

      res.status(200).json({ trial: true, posts });
    });
});

router.get('/home', (req, res) => {
  Post.find()
    .sort({ _id: -1 })
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);

      res.status(200).json({ trial: true, posts });
    });
});

router.get('/:category', (req, res) => {
  Post.find({ category: req.params.category })
    .sort({ _id: -1 })
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ trial: true, posts });
    });
});

//생성
router.post('/', (req, res) => {
  const post = new Post(req.body);
  post.save((err, post) => {
    if (err) return res.json({ trial: false, err });

    res.status(200).json({ trial: true, post });
  });
});

module.exports = router;
