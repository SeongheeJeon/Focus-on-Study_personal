const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares_fos');
const User = require('../models/user_fos');

const router = express.Router();

router.post('/signUp', isNotLoggedIn, async (req, res, next) => {
  console.log('okay');
  const { email, localId, nick, password, passwordAgain } = req.body;
  try {
    const exUser = await User.findOne({ where: { localId } });
    if (exUser) {
      return res.redirect('/signUp?error=exist');
    }
    if (password !== passwordAgain)
      return res.redirect('/signUp?error=notMatch');
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      localId,
      nick,
      password: hash,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      console.log('로그인 성공');
      return res.redirect('/typeSelection');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
