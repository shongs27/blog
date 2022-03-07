require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
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

// UserSchema.pre('save', function (next) {
//   next();
//   // if (this.isModified('password')) {
//   //   bcrypt.genSalt(5, function (err, salted) {
//   //     if (err) return next(err);

//   //     bcrypt.hash(this.password, salted, function (err, hash) {
//   //       if (err) return next(err);
//   //       this.password = hash;
//   //       next();
//   //     });
//   //   });
//   // } else {
//   //   return;
//   // }
// });

UserSchema.methods.generateToken = function (cb) {
  const token = jwt.sign(this._id.toString(), process.env.jwtKey);
  this.token = token;

  //user.tokenExp는 조금 있다가 하자

  this.save((err, user) => {
    if (err) return cb(err);
    return cb(null, user);
  });
};

// UserSchema.statics.findByToken = function (token, cb) {
//   //jwt복원
//   jwt.verify(token, 'hongs', (err, decoded) => {
//     User.findOne({ _id: decoded, token }, (err, user) => {
//       if (err) return cb(err);
//       cb(null, user);
//     });
//   });
// };

module.exports = mongoose.model('User', UserSchema);
