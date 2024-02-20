const menus = require("../../database/menus.json")
module.exports = (req,res) => {
    const idMenu = parseInt(req.params.id);
    const menuFind = menus.find((menu)=> menu.id === idMenu);
    if (!menuFind) {
      res.status(404).send("Menu not found");
      return;
  }
    res.render("detalleMenu",{menu:menuFind})
  }