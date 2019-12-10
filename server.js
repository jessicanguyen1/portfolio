const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
