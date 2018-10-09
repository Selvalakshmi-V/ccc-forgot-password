'use strict';

//Define a model for userpermission table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('userpermission', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    permission_code: DataTypes.STRING,
    permission_desc: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    modifiedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
      tableName: 'userpermission',
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