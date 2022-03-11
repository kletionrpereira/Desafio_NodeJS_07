'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    
    static associate(models) {
     
    }
  }
  Aluno.init({
    nome: DataTypes.STRING,
    nota: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};