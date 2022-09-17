'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      reservas_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inicio_fecha:{
        type:Sequelize.DATE,
      },
      fin_fecha:{
        type:Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_habitaciones:{
        type:Sequelize.INTEGER,
        references:{
          model:{
            tableName:'habitaciones'
          },
          key:'idhabitaciones'
        },
        allowNull:false
      },
      id_huespedes:{
        type:Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'huespedes',
          },
          key: 'huesped_id'
        },
        allowNull:false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservas');
  }
};