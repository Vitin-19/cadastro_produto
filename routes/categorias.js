const express = require('express');
const router = express.Router();

const { Categoria } = require('../models');

router.get('/', async (req, res) => {
  const categorias = await Categoria.findAll();
  res.json(categorias);
});

router.post('/', async (req, res) => {
  const nome = req.body.nome.toUpperCase();
  await Categoria.create({ nome });
  res.redirect('/produtos');
});

module.exports = router;
