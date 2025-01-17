const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

const multer = require('multer');

const storage = multer.memoryStorage({
  filename: function (req, file, cb) {
    cb(null, originalname);
  },
});

const upload = multer({ storage }).array('image');

//생성
router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).send({ trial: false, err });
    } else if (err) {
      return res.status(400).send({ trial: false, err });
    }

    const { title, description, category, md } = req.body;
    const images = req.files.map((image) => ({
      data: image.buffer,
      contentType: image.mimetype,
      filename: image.originalname.replace(/.(png|jpg)/, ''),
    }));

    const requestPost = {
      title,
      description,
      category,
      content: md,
      images,
    };

    const post = new Post(requestPost);
    post.save((err, post) => {
      if (err) return res.json({ trial: false, err });

      res.status(200).json({ trial: true, post });
    });
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
