'use strict';

// Define a model for userpaymentmode table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('userpaymentmode', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    payment_mode: DataTypes.STRING,
    user_account_id: DataTypes.INTEGER
  }, {
      tableName: 'userpaymentmode'
    });

  //Adding a class level method.
  Model.associate = function (models) {
     //user_account_id of the userpaymentmode model belongs to the userAccount model 
    this.userAccount = this.belongsTo(models.userAccount);
  };

  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};