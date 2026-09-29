const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  quantidade: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Categoria.hasMany(Produto, { 
  foreignKey: 'categoriaId', 
  as: 'produtos' 
});

Produto.belongsTo(Categoria, { 
  foreignKey: 'categoriaId', 
  as: 'categoria' // No singular, já que o produto só tem uma categoria
});

module.exports = {
  sequelize,
  Produto
};