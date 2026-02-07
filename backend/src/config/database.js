const { Sequelize } = require('sequelize');

// Setup database connection
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' // Supported dialects: mysql, postgres, sqlite, mssql
});

module.exports = sequelize;