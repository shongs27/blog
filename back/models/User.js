require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jwt = require('jsonwebtoken');
const moment = require('moment');

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    // unique: 1,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.methods.generateToken = function (cb) {
  const token = jwt.sign(this._id.toString(), process.env.jwtKey);
  const hours = moment().add(2, 'hour').valueOf();

  this.token = token;
  this.tokenExp = hours;

  this.save((err, user) => {
    if (err) return cb(err);

    return cb(null, user);
  });
};

module.exports = mongoose.model('User', userSchema);
