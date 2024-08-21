// Ativa o modo estrito do JavaScript, ajudando a evitar erros comuns e práticas ruins.
'use strict'; 


// Importa a classe Model do Sequelize, que é a base para definir modelos no Sequelize.
const { Model } = require('sequelize'); 

 // Define e exporta um modelo chamado "Task". 
// A função anônima é usada para criar o modelo e recebe como parâmetros a instância do Sequelize e os tipos de dados.
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Método auxiliar para definir associações entre modelos.
     * Este método não faz parte do ciclo de vida do Sequelize.
     * O arquivo `models/index` chamará este método automaticamente para definir as associações.
     */

    // Aqui você pode definir associações com outros modelos, como `hasMany`, `belongsTo`, etc.
    static associate(models) {
      
    }
  }

  // Inicializa o modelo "Task" com seus atributos e configurações.
  Task.init({
    // Define um campo chamado "name" que é do tipo STRING (texto).
    name: DataTypes.STRING 

  }, {
    // Passa a instância do Sequelize para conectar o modelo à base de dados.
    // Define o nome do modelo como "Task".
    sequelize,
    modelName: 'Task', 

  });

  // Retorna o modelo "Task" que agora está pronto para ser usado em outras partes da aplicação.
  return Task;
};
