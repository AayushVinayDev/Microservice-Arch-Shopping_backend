const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello World!" });
});

app.listen(8002, () => {
  console.log("shopping listening on port 8002!");
});
