'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   // O método `up` é utilizado para adicionar dados ao banco de dados quando a migração é aplicada.
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // Utiliza o método `bulkInsert` para adicionar múltiplos registros à tabela `Tasks` de uma só vez.
    // Os campos `createdAt` e `updatedAt` são definidos com a data e hora atual, que são comumente utilizados para rastrear quando o registro foi criado e atualizado.
    await queryInterface.bulkInsert('Tasks', [{
      name: 'Batata',
      createdAt: new Date(), // Define a data e hora atual como a data de criação do registro.
      updatedAt: new Date()  // Define a data e hora atual como a data de última atualização do registro.
    }, {
      name: 'Maca',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Mel',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
