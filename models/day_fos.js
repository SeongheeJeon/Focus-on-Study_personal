const { DATE } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = class Day extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        subjectName: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        date: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          defaulValue: Sequelize.NOW,
        },
        seconds: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaulValue: 0,
        },
        hostName: {
          type: Sequelize.STRING(20),
          allowNull: false,
          defaulValue: 'UNKNOWN',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Day',
        tableName: 'Days',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }
};
