'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('habitaciones', {
      idhabitaciones: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      precio_por_noche: {
        type: Sequelize.FLOAT
      },
      piso: {
        type: Sequelize.FLOAT
      },
      max_personas: {
        type: Sequelize.FLOAT
      },
      tiene_cama_debe: {
        type: Sequelize.STRING
      },
      tien_ducha: {
        type: Sequelize.STRING
      },
      tiene_baño: {
        type: Sequelize.STRING
      },
      tiene_balcon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('habitaciones');
  }
};