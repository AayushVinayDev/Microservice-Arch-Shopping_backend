const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello World!" });
});

app.listen(8001, () => {
  console.log("customer listening on port 8001!");
});
