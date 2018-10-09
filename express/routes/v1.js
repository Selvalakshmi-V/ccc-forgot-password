const express = require('express');
const router = express.Router();

const UserAccountController = require('./../controllers/userAccountController');

const passport = require('passport');

require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ status: "success", message: "Parcel Pending API", data: { "version_number": "v1.0.0" } })
});


router.post('/login', UserAccountController.login);
router.post('/adduser', UserAccountController.addUser);
router.post('/getUser', UserAccountController.getUser);
router.post('/sendEmail', UserAccountController.sendEmail);
router.post('/resetPassword', UserAccountController.resetPassword);
module.exports = router;