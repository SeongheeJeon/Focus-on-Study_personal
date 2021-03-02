const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user_fos');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'localId',
        passwordField: 'password',
      },
      async (localId, password, done) => {
        try {
          const exUser = await User.findOne({ where: { localId } });
          if (exUser) {
            const result = await bcrypt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: '일치하는 회원정보가 없습니다.' });
            }
          } else {
            done(null, false, { message: '일치하는 회원정보가 없습니다.' });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      },
    ),
  );
};
