'use strict';

// Define a model for payment table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('payment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_account_id: DataTypes.INTEGER,
    user_payment_mode_id: DataTypes.INTEGER,
    report_type_id: DataTypes.INTEGER,
    promo_code_id: DataTypes.INTEGER,
    referral_code_id: DataTypes.INTEGER,
    purchase_amount: DataTypes.INTEGER,
    purchase_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    payment_status: {
      type: DataTypes.STRING,
    }
  }, {
      tableName: 'payment'
    });

  //Adding a class level method.
  Model.associate = function (models) {
    //promo_code_id of the payment model belongs to the promocode model
    this.promocode = this.belongsTo(models.promocode);
    //referral_code_id of the payment model belongs to the referralcode model
    this.referralcode = this.belongsTo(models.referralcode);
    //report_type_id of the payment model belongs to the reporttype model
    this.reporttype = this.belongsTo(models.reporttype);
    //user_account_id of the payment model belongs to the userAccount model
    this.userAccount = this.belongsTo(models.userAccount);
    //user_payment_mode_id of the payment model belongs to the userpaymentmode model
    this.userpaymentmode = this.belongsTo(models.userpaymentmode);
  };

  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};