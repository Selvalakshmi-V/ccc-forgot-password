'use strict';

// Define a model for userprepaid table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('userprepaid', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_account_id: DataTypes.INTEGER,
    prepaid_amount: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    modifiedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
      tableName: 'userprepaid'
    });

  //Adding a class level method.
  Model.associate = function (models) {
    //user_account_id of the userprepaid model belongs to the userAccount model 
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