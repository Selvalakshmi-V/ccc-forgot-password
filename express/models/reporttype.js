'use strict';

// Define a model for reporttype table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('reporttype', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    report_type_name: DataTypes.STRING,
    report_amount: DataTypes.STRING,
    // datasourceid: DataTypes.INTEGER
  }, {
      tableName: 'reporttype'
    });

  //Adding a class level method.
  Model.associate = function (models) {
    //datasourceid of the reporttype model belongs to the datasource model
    this.datasource = this.belongsTo(models.datasource);
  };

  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};