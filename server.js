const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const favicon = require("serve-favicon");
const path = require("path");

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.get("/", (req, res, next) => {
  res.render("index", { path: "/", title: "JN" });
});

app.get("/portfolio", (req, res, next) => {
  res.render("portfolio", { path: "/portfolio", title: "Portfolio" });
});

app.get("/contact", (req, res, next) => {
  res.render("contact", { path: "/contact", title: "Contact" });
});

app.get("/resume", (req, res, next) => {
  res.render("resume", { path: "/resume", title: "Resume" });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
