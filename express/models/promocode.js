'use strict';
//Define a model for promocode table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('promocode', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    promo_code: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    percentage: DataTypes.INTEGER,
    start_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    end_date: DataTypes.DATE,
  }, {
      tableName: 'promocode'
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