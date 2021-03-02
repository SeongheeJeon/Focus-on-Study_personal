const { isLoggedIn, isNotLoggedIn } = require('./middlewares_fos');
const { User, Subject, Day } = require('../models');
const router = require('./page_fos');
const { render } = require('nunjucks');

// router.use((req, res, next) => {
//     res.locals.user = req.user;
//     next();
// });

//by seonghee
router.get('/aloneStudy/createGroup', isLoggedIn, async (req, res, next) => {
  const dayID = req.query.dayID;
  try {
    res.render('createGroup', { dayID });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

//by seonghee
router.get('/aloneStudy/findGroup', isLoggedIn, async (req, res, next) => {
  const dayID = req.query.dayID;
  try {
    res.render('findGroup', { dayID });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

//by seonghee
router.get('/aloneStudy/inviteMember', isLoggedIn, async (req, res, next) => {
  const dayID = req.query.dayID;
  try {
    res.render('inviteMember', { dayID });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get('/aloneStudy', isLoggedIn, async (req, res, next) => {
  try {
    const subjects = await Subject.findAll({
      where: {
        UserId: req.user.id,
      },
      order: [['createdAt', 'DESC']],
    });
    res.render('aloneStudy', {
      title: 'Alone - fos',
      subjects,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/aloneStudy/addSubject', isLoggedIn, async (req, res, next) => {
  const name = req.body.name;
  const id = req.user.id;
  const hostName = req.user.nick;
  try {
    const user = await User.findOne({ where: { id } });
    const exSubject = await Subject.findOne({ where: { hostName, name } });
    if (exSubject) {
      return res.redirect('./?error=exist');
    }
    subject = await Subject.create({
      name,
      hostName,
    });
    await user.addSubject(subject);
    return res.redirect('./');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/aloneStudy/deleteSubject', isLoggedIn, async (req, res, next) => {
  const name = req.body.name;
  const hostName = req.body.hostName;
  try {
    await Subject.destroy({ where: { hostName, name } });
    return res.redirect('./');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get('/aloneStudy/popup_studying', isLoggedIn, async (req, res, next) => {
  const subjectName = req.query.name;
  const hostName = req.user.nick;
  const dayID = req.query.dayID;
  var today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  try {
    if (subjectName)
      var exDay = await Day.findOne({ where: { subjectName, date, hostName } });
    if (dayID) var exDay = await Day.findOne({ where: { id: dayID } });
    if (exDay) res.render('popup_studying', { exDay });
    else {
      exDay = await Day.create({
        subjectName,
        hostName,
        date,
        seconds: 0,
      });
      res.render('popup_studying', { exDay });
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get('/aloneStudy/setRestTime', isLoggedIn, async (req, res, next) => {
  const dayID = req.query.dayID;
  try {
    res.render('setRestTime', { dayID });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/aloneStudy/popup_resting', isLoggedIn, async (req, res, next) => {
  const dayID = req.query.dayID;
  const minute = req.body.min;
  const second = req.body.sec;
  try {
    res.render('popup_resting', { minute, second, dayID });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/aloneStudy/end_study', isLoggedIn, async (req, res, next) => {
  const subjectName = req.body.OsubjectName;
  const date = req.body.Odate;
  const seconds = req.body.Oseconds;
  const hostName = req.body.OhostName;
  try {
    const exDay = await Day.findOne({ where: { subjectName, date, hostName } });
    const dayID = exDay.id;
    await Day.update(
      {
        seconds: seconds,
      },
      {
        where: { id: dayID },
      },
    );
    res.render('exit');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get('/aloneStudy/re_studying', isLoggedIn, async (req, res, next) => {
  const dayID = req.query.dayID;
  try {
    var exDay = await Day.findOne({ where: { id: dayID } });
    res.redirect('../popup_studying?dayID=' + dayID);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
