'use strict';

//Define a model for userrole table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('userrole', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rolename: DataTypes.STRING,
    descripton: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    modifiedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
      tableName: 'userrole',
    });

  Model.associate = function (models) {
  };

  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json
    let json = this.toJSON();
    return json;
  };

  return Model;
};