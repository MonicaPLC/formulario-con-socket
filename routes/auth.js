const { Router } = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../db");
const router = Router();

router.get("/formulario", (req, res) => {
  const errors = req.flash("errors");
  const mensajes = req.flash("mensajes");

  res.render("formulario", { errors, mensajes });
});

module.exports = router;
