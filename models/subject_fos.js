const Sequelize = require('sequelize');

module.exports = class Subject extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: false,
        },
        totalMinutes: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        hostName: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: false,
          defaultValue: 'UNKNOWN',
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Subject',
        tableName: 'Subjects',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      },
    );
  }

  static associate(db) {
    db.Subject.belongsTo(db.User);
    db.Subject.belongsTo(db.Team);
  }
};
