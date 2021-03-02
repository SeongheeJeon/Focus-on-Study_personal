const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares_fos');
const { Team, User, Subject } = require('../models');
const { hash } = require('bcrypt');

const router = express.Router();

// router.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

router.get('/signUp', isNotLoggedIn, (req, res) => {
  res.render('signUp', { title: '회원가입 - fos' });
});

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      res.redirect('/typeSelection');
    } else
      res.render('main', {
        title: 'fos',
      });
  } catch (err) {
    console.error(err);
    next(err);
  }
});
router.get('/typeSelection', isLoggedIn, (req, res) => {
  res.render('typeSelection', {
    title: '선택 - fos',
  });
});

module.exports = router;
