const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.use(function(req,res,next){setTimeout(next,2000)});

app.get("/hello", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
