const postUser = async (req, res) => {
  try {
    const user = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.username
    };

    console.log(user);
    return res.status(201).json({
      success: true,
      message: "User was created"
    });
  } catch (err) {
    console.log(err);
  }
};


module.exports = { postUser }