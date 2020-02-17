const queries = require('../query/index');

const getSudo = async (req, res) => {
  try {
    const sudo = await queries.getSudo();
    res.status(200).json({
      success: true,
      sudo: sudo
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err
    });
  }
};

module.exports = { getSudo };
