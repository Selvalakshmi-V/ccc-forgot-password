'use strict';

// Define a model for user_postpaid_payment table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('user_postpaid_payment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_account_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    postpaid_amount: DataTypes.INTEGER
  }, {
      tableName: 'user_postpaid_payment'
    });

  //Adding a class level method.
  Model.associate = function (models) {
    //payment_id of the user_postpaid_payment model belongs to the payment model
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