const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutoIncrement = require('mongoose-sequence')(mongoose);

const bcrypt = require('bcrypt');
const saltRounds = 10;

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

boardSchema.plugin(AutoIncrement, { inc_field: 'id' });

boardSchema.pre('save', function (next) {
  const thread = this;

  if (thread.isModified('password')) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(thread.password, salt, function (err, hash) {
        if (err) return next(err);

        thread.password = hash;

        next();
      });
    });
  } else next();
});

boardSchema.methods.comparePassword = function (clientPlainPassword, cb) {
  bcrypt.compare(clientPlainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);

    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('Board', boardSchema);
