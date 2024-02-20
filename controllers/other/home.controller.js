const menus = require("../../database/menus.json")
const about = require("../../database/about.json")
module.exports = (req,res) => {
    res.render("index",{menus: menus, about: about});
  }