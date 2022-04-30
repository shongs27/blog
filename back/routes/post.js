const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

const multer = require('multer');
const fs = require('fs');
var path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

//생성
router.post('/', upload.single('image'), (req, res) => {
  const { title, description, category, md } = req.body;
  const requestPost = {
    title,
    description,
    category,
    content: md,
    image: {
      data: fs.readFileSync(
        path.join(__dirname, '..', 'uploads/' + req.file.filename)
      ),
      contentType: 'image/png',
    },
  };

  const post = new Post(requestPost);
  post.save((err, post) => {
    if (err) return res.json({ trial: false, err });

    res.status(200).json({ trial: true, post });
  });
});

router.post('/search', (req, res) => {
  Post.find({ $text: { $search: req.body } }).exec((err, posts) => {
    if (err) return res.status(400).json({ trial: false });

    res.status(200).json({ trial: true, posts });
  });
});

router.get('/:category/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).exec((err, post) => {
    if (err) return res.status(400).send(err);

    res.status(200).json({ trial: true, post });
  });
});

router.get('/popularPosts', (req, res) => {
  Post.find()
    .where('likes')
    .gte(1)
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

router.get('/all', (req, res) => {
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

module.exports = router;
