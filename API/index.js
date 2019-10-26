const app = require("./server");
const Config = require("./Configs/Defaults");
const mongoose = require("mongoose");

// connection with database
mongoose.connect(
  Config.DB_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  err => {
    if (err) throw new Error(err);
    console.log("Database Connected...");
    app.listen(Config.PORT, () => {
      console.log(
        `Global API Address is: http://${Config.HOST}:${Config.PORT}`
      );
    });
  }
);
