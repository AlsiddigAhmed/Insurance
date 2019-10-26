const bcrypt = require("bcryptjs");
const config = require("../Configs/Defaults");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

exports.authenticate = (user, password) => {
  return new Promise(async (resolve, reject) => {
    // Match passwords
    const isMatch = await bcrypt
      .compare(password, user.password)
      .catch(err => reject("Authenticate Faild"));

    if (isMatch) {
      resolve(user);
    } else {
      reject("Authenticate Faild");
    }
  });
};

exports.hashPassAndSave = user => {
  return new Promise(async (resolve, reject) => {
    // Generate salt
    const salt = await bcrypt.genSalt(10).catch(reject);

    // hash password
    const hash = await bcrypt.hash(user.password, salt).catch(reject);

    //assign Hashed Password to the user
    user.password = hash;

    //Save user
    const newuser = await user.save().catch(reject);

    // resolve with the new user
    resolve(newuser);
  });
};

exports.hash = password => {
  return new Promise(async (resolve, reject) => {
    // Generate salt
    const salt = await bcrypt.genSalt(10).catch(reject);

    // hash password
    const hash = await bcrypt.hash(password, salt).catch(reject);

    // resolve with the new user
    resolve(hash);
  });
};

exports.signToken = user => {
  //Create Jwt
  const token = jwt.sign({ user }, config.JWT_SECRET);

  // returns iat, exp and user;
  const info = jwt.decode(token);

  delete info.user.Password;
  delete info.user.Firstname;
  delete info.user.Lastname;
  delete info.user.MemberSince;

  // returns info + token
  return {
    ...info,
    token
  };
};

// verify Tokens
exports.verifyToken = async (req, res, next) => {
  // skip login, signup, countries route
  if (req.url.includes("login") || req.url.includes("signup")) {
    return next();
  } else if (
    req.url.includes("countries") ||
    req.url.includes("getallusernames")
  ) {
    return next();
  }

  // get the auth header
  const authHeader = req.headers["authorization"];

  if (typeof authHeader !== "undefined") {
    // get the token form the header
    const token = authHeader.split(" ")[1];

    try {
      // verify the token
      const authData = await jwt.verify(token, config.JWT_SECRET);

      // set the user and token
      req.user = authData;
      req.token = token;
      // jump to the next middleware
      next();
    } catch (err) {
      return next(createError(500, err.message));
    }
  } else {
    return next(createError.Unauthorized());
  }
};
