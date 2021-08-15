'use strict'

const {Sequelize, DataTypes} = require('sequelize');

const POSTGRES_URI = process.env.NODE_ENV="test" ?'sqlite:memory' :'postgres://localhost:5432/class6';
const Users = require('./user');
const sequelize = new Sequelize(POSTGRES_URI, {});
module.exports = {
   
    db: sequelize,
    Users:Users(sequelize, DataTypes)

}