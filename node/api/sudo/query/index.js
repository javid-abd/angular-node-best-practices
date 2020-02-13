const Sudo = require('../model/index');

const getSudo = async () => {
  try {
    return await Sudo.find();
  } catch (err) {
    return err;
  }
};

module.exports = { getSudo };
