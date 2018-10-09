'use strict';
const bcrypt = require('bcrypt');
const bcrypt_p = require('bcrypt-promise');
const jwt = require('jsonwebtoken');
//Define a model for userAccount table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('userAccount', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: { type: DataTypes.STRING, unique: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email address must be valid"
        }
      }
    },
    companyName: DataTypes.STRING,
    active: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    },
    password: DataTypes.STRING,
    contactNumber: { type: DataTypes.INTEGER, unique: true },
    userRole: { type: DataTypes.STRING },
    permissionCode: DataTypes.STRING,
    resetPasswordToken: DataTypes.STRING,
    resetPasswordExpires: {
      type: DataTypes.DATE
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    modified: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },

  }, {
      tableName: 'userAccount'
    });

  Model.associate = function (models) {
    // id of the userAccount table connected with multipe answers rows
    this.answers = this.hasMany(models.answers);
  };

  //Class level methods to making the encrypted password and save this.
  Model.beforeSave(async (user, options) => {
    let err;
    // Hash the password if it has been changed or is new
    if (user.changed('password')) {
      let salt, hash;
      //Asynchronously generates a salt.
      [err, salt] = await to(bcrypt.genSalt(10));
      if (err) {
        console.log(err.message);
      };
      //Asynchronously generates a hash with salt
      [err, hash] = await to(bcrypt.hash(user.password, salt));
      if (err) {
        console.log(err.message);
      };
      user.password = hash;
    }
  });

  //Instance level methods to compare the password 
  Model.prototype.comparePassword = async function (pw) {
    let err, pass
    if (!this.password) TE('password not set');

    //Password verification
    [err, pass] = await to(bcrypt_p.compare(pw, this.password));
    if (err) TE(err);

    if (!pass) TE('Invalid username or password, please try again');

    return this;
  };

  //Instance level methods to get the jsonWebToken
  Model.prototype.getJWT = function () {
    //convert a string to integer
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    //return the signature for given payload and secretkey
    return "Bearer " + jwt.sign({ user_id: this.id }, CONFIG.jwt_encryption, { expiresIn: expiration_time });
  };

  //Adding the instance level methods
  Model.prototype.toWeb = function () {
    //convert to json
    let json = this.toJSON();
    return json;
  };
  return Model;
};