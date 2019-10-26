const fs = require("fs");

function handelErr(err) {
  if (err) {
    fs.mkdir(__dirname + "/../upload", err => {
      if (err) throw new Error(err);
    });
  }
}
const options = {
  encoding: "UTF-8"
};

module.exports = (() => {
  fs.readdir(`${__dirname}/../upload/`, options, err => handelErr(err));
})();
