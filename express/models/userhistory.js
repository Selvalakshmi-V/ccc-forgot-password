'use strict';
//Define a model for userhistory table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('userhistory', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_account_id: { type: DataTypes.INTEGER },
    ipaddress: DataTypes.STRING,
    signinAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    signoutAt: DataTypes.DATE,
  }, {
      tableName: 'userhistory'
    });

  Model.associate = function (models) {
    //user_account_id of the userhistory model belongs to the userAccount model
    this.userAccount = this.belongsTo(models.userAccount);
  };
  
  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json
    let json = this.toJSON();
    return json;
  };
  return Model;
};