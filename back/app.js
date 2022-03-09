require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({ origin: '*', credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('몽고DB 가동 중'))
  .catch((e) => console.error('몽고DB 실패', e));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/login', require('./routes/user'));
app.use('/posts', require('./routes/post'));

// app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`${port}에서 express 가동 중`);
});
