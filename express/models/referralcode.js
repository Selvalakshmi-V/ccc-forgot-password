'use strict';
//Define a model for referralcode table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('referralcode', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    referral_code: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    start_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    end_date: DataTypes.DATE,
  }, {
      tableName: 'referralcode'
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