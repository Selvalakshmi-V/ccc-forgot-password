'use strict';

// Define a model for reportOrder table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('reportorder', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_account_id: DataTypes.INTEGER,
    payment_id: {
      type: DataTypes.INTEGER,
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
      tableName: 'reportorder'
    });

  //Adding a class level method.
  Model.associate = function (models) {
    //payment_id of the reportorder model belongs to the payment model
    this.payment = this.belongsTo(models.payment);
  };

  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};