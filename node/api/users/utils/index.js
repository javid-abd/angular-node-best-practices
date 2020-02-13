const bcrypt = require('bcryptjs');

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    /* 
     default round is 10. Round 12 seems much secure
    * If you choose max round (16) for absolute seure password, be aware of waiting seconds which will take approximately 10 seconds
    */

    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

module.exports = { hashPassword };
