const Sequelize = require('sequelize');

module.exports = class Team extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        hostName: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Team',
        tableName: 'Teams',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }

  static associate(db) {
    db.Team.hasMany(db.Subject);
    db.Team.belongsToMany(db.User, { through: 'TeamUser' });
  }
};
