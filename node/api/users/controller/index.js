const queries = require('../query/index');

const util = require('../utils/index');

const postUser = async (req, res) => {
  try {
    const hashedPassword = await util.hashPassword(req.body.password);
    const user = {
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword
    };
    await queries.createUser(user);

    return res.status(201).json({
      success: true,
      message: 'User was created'
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: `Error occurred while creating a new user`,
      error: err
    });
  }
};

module.exports = { postUser };
