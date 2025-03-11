const fs = require("fs");
const path = require("path");

const bicisPath = path.join(__dirname, "..", "data", "bicis.json");

module.exports = {
  home: (req, res) => {
    // console.log(JSON.parse(fs.readFileSync(bicisPath, "utf-8")));
    const bicis = JSON.parse(fs.readFileSync(bicisPath, "utf-8"));
    res.render("home", { bicis });
  },
};
