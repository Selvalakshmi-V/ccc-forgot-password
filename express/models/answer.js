'use strict';
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('answers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    answerText: DataTypes.STRING,
    questionId: DataTypes.INTEGER,
    userAccountId: DataTypes.INTEGER,
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    modified: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
    {
      tableName: 'answers'
    });
  Model.associate = function (models) {
    //questionId of the answers model belongs to the questions model
    this.questions = this.belongsTo(models.questions);
    //userAccountId of the answers belongs to the userAccount model
    this.userAccount = this.belongsTo(models.userAccount);

  };
  Model.prototype.toWeb = function () {
    let json = this.toJSON();
    return json;
  };
  return Model;
};