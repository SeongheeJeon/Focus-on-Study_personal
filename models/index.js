const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user_fos');
const Team = require('./team_fos');
const Subject = require('./subject_fos');
const Day = require('./Day_fos');

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;
db.User = User;
db.Team = Team;
db.Subject = Subject;
db.Day = Day;

User.init(sequelize);
Team.init(sequelize);
Subject.init(sequelize);
Day.init(sequelize);

User.associate(db);
Team.associate(db);
Subject.associate(db);
module.exports = db;
