'use strict';

// Define a model for user_card_details table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('user_card_details', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_account_id: DataTypes.INTEGER,
    card_number: DataTypes.INTEGER,
    card_holder_name: DataTypes.STRING,
    cvv_number: DataTypes.INTEGER,
    expiry_data: DataTypes.DATE,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    modifiedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
      tableName: 'user_card_details'
    });

  //Adding a class level method.
  Model.associate = function (models) {
    //user_account_id of the user_card_details model belongs to the userAccount model
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