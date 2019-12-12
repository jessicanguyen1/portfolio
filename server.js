const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("index", { path: "/", name: "Jess", title: "JN" });
});

app.get("/portfolio", (req, res, next) => {
  res.render("portfolio", { path: "/portfolio", title: "Portfolio" });
});

app.get("/contact", (req, res, next) => {
  res.render("contact", { path: "/contact", title: "Contact" });
});

// app.get("/resume", (req, res, next) => {
//   res.render("resume", { path: "/resume" });
// });

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
