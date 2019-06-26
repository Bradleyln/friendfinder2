var path = require("path");

module.exports = function (app) {

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/data/friends.js", function(req, res){
 res.sendFile(path.join(__dirname, "../data/friends.js"));
});
};