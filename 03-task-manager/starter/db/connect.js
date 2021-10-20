const mongoose = require("mongoose");

const connectionString = "mongodb://172.16.3.18:27017/03-TASK-MANAGER";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO THE DB..."))
  .catch((err) => console.log(err));
