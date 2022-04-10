const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const Board = require('../models/Board');

//게시글 수정
router.patch('/', (req, res) => {
  const { _id, name, password, title, content } = req.body;

  let newPassword;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      newPassword = hash;

      Board.findOneAndUpdate(
        { _id },
        { $set: { name, password: newPassword, title, content } },
        { new: true }
      ).exec((err) => {
        console.log(newPassword);
        if (err) return res.status(400).send({ trial: false });

        res.status(200).send({ trial: true });
      });
    });
  });
});

// 게시판 로그인 (수정, 삭제)
router.post('/login', (req, res) => {
  const { loginState, id, password: clientPassword } = req.body;

  Board.findOne({ id }, (err, thread) => {
    if (err) return res.status(400).send({ trial: false });

    thread.comparePassword(clientPassword, (err, isMatch) => {
      if (!isMatch) return res.status(400).send({ trial: false });

      if (loginState === 'modify') {
        Board.findOne({ id })
          .select('title name content')
          .exec((err, thread) => {
            if (err) return res.status(400).send({ tiral: false });

            res.status(200).json({ trial: true, thread });
          });
      }

      if (loginState === 'eliminate') {
        Board.findOneAndDelete({ id }).exec((err, board) => {
          if (err) return res.status(400).send({ trial: false });

          res.status(200).json({ trial: true });
        });
      }
    });
  });
});

//게시글 상세내용 가져가기
router.get('/:id', (req, res) => {
  Board.findOne({ id: req.params.id }).exec((err, thread) => {
    if (err) return res.status(400).send({ trial: false });

    return res.status(200).send({ trial: true, thread });
  });
});

// 게시판 가져가기
router.get('/', (req, res) => {
  Board.find()
    .sort({ id: -1 })
    .exec((err, board) => {
      if (err) return res.status(400).send({ trial: false });

      return res.status(200).send({ trial: true, board });
    });
});

// 게시글 등록
router.post('/', (req, res) => {
  const { name, password, title, content } = req.body;
  const board = new Board({
    name,
    password,
    title,
    content,
  });

  board.save((err) => {
    if (err) return res.status(400).send({ trial: false });

    Board.find()
      .sort({ id: -1 })
      .exec((err, board) => {
        if (err) return res.status(400).send({ trial: false });

        return res.status(200).send({ trial: true, board });
      });
  });
});

module.exports = router;
