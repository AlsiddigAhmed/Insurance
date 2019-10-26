const Route = require("express").Router();
const bodyParser = require("body-parser");
const verifyToken = require("../security/auth");

// requiring database schema models
const Register = require("../Models/Registration.model");

let ParseBodyData = bodyParser.urlencoded({ extended: true });

/*============================================
==================login route=================
============================================== */

Route.get("/getallusernames", ParseBodyData, async (req, res) => {
  let allusers = await Register.Account.find().catch(err => {
    next(creatError(500, err));
  });

  if (!allusers) {
    return res.json({
      message: "there is some error while getting all users",
      status: 500
    });
  } else {
    res.json(
      allusers.map(function(name) {
        return name.Name;
      })
    );
  }
});

Route.post("/login", ParseBodyData, async (req, res, next) => {
  const { Name, Password } = req.body;

  console.log(Name, Password);
  let user = await Register.Account.findOne({ Name }).catch(err => {
    next(creatError(500, err));
  });

  if (!user) {
    return res.json({
      message: "user not found",
      status: 401
    });
  }
  if (user.Password != Password) {
    res.json({
      message: "wrong password",
      status: 400
    });
  } else {
    let token = verifyToken.signToken(user);
    res.json(token);
  }
});

/*============================================
================signup route==================
============================================== */
Route.post("/signup", ParseBodyData, async (req, res, next) => {
  const { Password, ConfirmPass } = req.body;

  if (Password === ConfirmPass) {
    delete req.body.ConfirmPass;
    const user = new Register.Account(req.body);

    user.save((err, success) => {
      err
        ? res.json({
            message: "there is a user with this name, try another name",
            status: 500
          })
        : res.json({ message: "new user success", status: 200 });
    });
  } else {
    res.json({
      message: "passwords are not the same",
      status: 403
    });
  }
});

/*============================================
============forget password route=============
============================================== */
Route.post("/forget-passwor", ParseBodyData, (req, res, next) => {
  const { phone } = req.body;
  // run restore function
  // PhoneConfirmationNumbers(phone);
});

/*============================================
=======confirm account by phone number========
============================================== */
Route.post("/confirm-phone", ParseBodyData, (req, res, next) => {
  const { confirmation } = req.body;
});

//

/*============================================
==reset the password and update the database==
============================================== */
Route.put("/reset-password", ParseBodyData, (req, res, next) => {
  const { NewPassword, ConfirmNewPassword } = req.body;
});

/*=================================================confirming functions================================================= */
const PhoneConfirmationNumbers = phone => {
  //   send the numbers to the phone number
};

const EmailConfirmationLink = Email => {
  // send the link or numbers to the email
};

module.exports = Route;
