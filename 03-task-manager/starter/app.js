const express = require("express");
const app = express();

const port = 3200;

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.listen(port, console.log(`server is listening on port ${port}...`));

console.log("Task Manager App");
