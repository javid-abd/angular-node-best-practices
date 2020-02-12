const User = require('../model/index');

const createUser = async userData => {
  try {
    const user = new User(userData);
    user.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser };
