'use strict';

// Define a model for datasource table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('datasource', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    data_source_name: DataTypes.STRING,
    data_source_url: {
      type: DataTypes.STRING,
    }
  }, {
      tableName: 'datasource'
    });

  //Adding a class level method.
  Model.associate = function (models) {
  };

  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};