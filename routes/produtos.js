const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

const { Produto, Categoria } = require('../models');

router.get('/', async (req, res) => {
  const categorias = await Categoria.findAll({ order: [['nome', 'ASC']] });
  const categoriaId = req.query.categoriaId;
  const busca = req.query.busca;
  const where = {};

  if (categoriaId) {
    where.categoriaId = categoriaId;
  }

  if (busca) {
    where.nome = {
      [Op.like]: `%${busca}%`
    };
  }

  const produtos = await Produto.findAll({
    where,
    include: [{ model: Categoria, as: 'categoria' }],
    order: [['nome', 'ASC']]
  });

  res.render('produtos/index', {
    produtos,
    categorias,
    categoriaId,
    busca
  });
});

router.get('/novo', async (req, res) => {
  const categorias = await Categoria.findAll();
  res.render('produtos/novo', { categorias });
});

router.post('/', async (req, res) => {
  let { nome, preco, quantidade, categoriaId } = req.body;

  nome = nome.toUpperCase();

  await Produto.create({ nome, preco, quantidade, categoriaId });

  res.redirect('/produtos');
});

router.get('/:id/editar', async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  const categorias = await Categoria.findAll();

  res.render('produtos/editar', {
    produto,
    categorias
  });
});

router.post('/:id', async (req, res) => {
  await Produto.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.redirect('/produtos');
});

router.post('/:id/deletar', async (req, res) => {
  await Produto.destroy({
    where: {
      id: req.params.id
    }
  });

  res.redirect('/produtos');
});

module.exports = router;
