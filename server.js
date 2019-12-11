const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("index", { path: "/" });
});

app.get("/portfolio", (req, res, next) => {
  res.render("portfolio", { path: "/portfolio" });
});

app.get("/contact", (req, res, next) => {
  res.render("contact", { path: "/contact" });
});

// app.get("/resume", (req, res, next) => {
//   res.render("resume", { path: "/resume" });
// });

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
