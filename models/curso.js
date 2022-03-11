'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    
    static associate(models) {
      
    }
  }
  Curso.init({
    nome: DataTypes.STRING,
    matricula: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};