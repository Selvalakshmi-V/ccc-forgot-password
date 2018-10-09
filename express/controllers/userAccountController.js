const User = require('../models').userAccount;
const Answers = require('../models').answers;
const Questions = require('../models').questions;
const authService = require('./../services/AuthService');

var async = require("async");
var nodemailer = require("nodemailer");
var crypto = require("crypto");

var Sequelize = require('sequelize');
/**
 * asnync function to checking the email and password for login.
 * If error occurs return the error response 
 * otherwise return the suceess response with token,user details and user role
 */
const login = async function (req, res) {
  let err, user;
  [err, user] = await to(authService.authUser(req.body));
  if (err) return ReE(res, err, 422);

  return ReS(res, { token: user.getJWT(), user: user.toWeb() });
}
module.exports.login = login;

/**
 * asnync function to create new user with given information.
 * If error occurs return the error response 
 * otherwise return the suceess response with created new user
 */
const addUser = async function (req, res) {
  let body = req.body;
  let err, user;
  //create new user
  console.log(body);
  [err, user] = await to(User.create(body));
  if (err) return ReE(res, err, 422);


  return ReS(res, { userDetails: user.toWeb() });
};
module.exports.addUser = addUser;


const getUser = async function (req, res) {
  let body = req.body;
  let err, user;
  //create new user
  console.log(body);
  [err, user] = await to(User.findOne({
    where: {
      email: body.email
    },
    include: [{
      model: Answers,
      include: [{
        model: Questions
      }]
    }]
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { userDetails: user });
};
module.exports.getUser = getUser;

const sendEmail = async function (req, res) {
  let body = req.body;
  let token;
  let err, email, emailUpdate;
  let smtpTransport, mailOptions;

  async.waterfall([
    function (done) {
      crypto.randomBytes(20, function (err, buf) {
        token = buf.toString('hex');
        console.log('token: ', token);
        done(err, token);
      });
    },

    async function (token, done) {
      [err, email] = await to(User.findOne({
        where: {
          email: body.email
        }
      }));

      if (!email) {
        console.log('Error', 'No account with that email address exists.');
        return ReS(res, { response: 'error' });
      }
      else {
        console.log(email.firstName);
        [err, emailUpdate] = await to(User.update({
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 3600000
        },
          {
            where: {
              email: body.email
            }
          }));

        console.log(emailUpdate, '@@@@@@@@@@@@@');

        smtpTransport = nodemailer.createTransport({
          service: 'gmail',
          secure: false,
          port: 25,
          auth: {
            user: 'vselvalakshmi95@gmail.com',
            pass: 'shaggy2018'
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        mailOptions = {
          to: body.email,
          from: 'vselvalakshmi95@gmail.com',
          subject: email.firstName + ',here\'s is the link to reset password',
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            req.headers.origin + '/resetPassword?token=' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n\n' +
            'This link will expire in 1 hour, so be sure to use it right away.'
        };

        smtpTransport.sendMail(mailOptions, function (err) {
          console.log('mail sent');
          console.log('success', 'An e-mail has been sent to ' + body.email + ' with further instructions.');
          done(err, 'done');
        });
        return ReS(res, { response: 'success' });
      }
    },
  ]);
  // if (err) return ReE(res, err, 422);
  // return ReS(res, { emailDetails: email.toWeb() });
};

module.exports.sendEmail = sendEmail;


const resetPassword = async function (req, res) {
  let body = req.body;
  let err, user;
  console.log('Token:', body.token);
  [err, user] = await to(User.findOne({
    where: {
      resetPasswordToken: body.token,
      resetPasswordExpires: { [Sequelize.Op.gt]: Date.now() }
    }
  }));

  if (!user) {
    console.log('Error', 'Password reset token is invalid or has expired.');
    return ReS(res, { response: 'error' });
  }

  else {
    console.log('Password reset token is valid');
    return ReS(res, { response: 'success' });
  }
}
module.exports.resetPassword = resetPassword;
