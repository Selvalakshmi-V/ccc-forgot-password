'use strict';

// Define a model for report table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('report', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_acc_id: DataTypes.INTEGER,
    url_report: DataTypes.STRING,
    // reportorderid: {
    //   type: DataTypes.INTEGER,
    // },
  }, {
      tableName: 'report'
    });

  //Adding a class level method.
  Model.associate = function (models) {
    //user_acc_id of the report model belongs to the userAccount model
    this.userAccount = this.belongsTo(models.userAccount);
    //reportorderid of the report model belongs to the reportorder model
    this.reportorder = this.belongsTo(models.reportorder);
  };

  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};