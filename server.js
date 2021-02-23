const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
  });
}

const port = process.env.PORT || "3333";
app.listen(port, () => {
  console.log(`server is listening on port: ` + port);
});
