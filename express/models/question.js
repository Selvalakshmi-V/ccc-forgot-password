'use strict';

// Define a model for questions table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('questions', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    question: DataTypes.STRING,
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    modified: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
      tableName: 'questions'
    });

  //Adding a class level method.
  Model.associate = function (models) {
    //id of the questions table connected with multipe answers rows
    this.answers = this.hasMany(models.answers);
  };

  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};