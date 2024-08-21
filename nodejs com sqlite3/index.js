// Refatoração de todo o código com Express
// Dependências neste projeto: express, nodemon, ejs, sequelize, sqlite3

// Express para configurar as rotas HTTP
const express = require('express');
const app = express();

// Sequelize para acessar os dados do banco de dados
const { Sequelize, DataTypes } = require('sequelize');

// Importa o modelo Task a partir do arquivo de modelos
const TaskModel = require('./models/task');

// Configura uma nova instância do Sequelize para usar o banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite', // Define o tipo de banco de dados como SQLite
  storage: 'my--database.db' // Define o caminho do arquivo de banco de dados SQLite
});

// Inicializa o modelo Task com a instância do Sequelize e os tipos de dados
const tasks = TaskModel(sequelize, DataTypes);

// Configura o motor de visualização EJS para renderizar páginas HTML dinâmicas
// A pasta views deste projeto é o caminho padrão onde o EJS busca as visualizações
app.set('view engine', 'ejs');

// Define uma rota GET para "/tarefa/" que retorna todas as tarefas em formato JSON
app.get('/tarefa/', async (req, res) => {
    
  // Consulta geral, retorna dados e metadados
  const allTask = await sequelize.query('SELECT * FROM Tasks');

  // Envia a resposta como JSON, incluindo todas as tarefas recuperadas
  res.json({ allTask });
});

// Define uma rota GET para "/tarefa/:id" que retorna uma tarefa específica e a renderiza usando EJS
app.get('/tarefa/:id', async (req, res) => {
  // Obtém o ID da tarefa a partir dos parâmetros da URL
  const taskId = req.params.id;

  // Busca a tarefa pelo ID usando o método findByPk (find by primary key) do Sequelize
  const task = await tasks.findByPk(taskId);

  // Renderiza a visualização 'tarefa' e passa os dados da tarefa para o template EJS
  res.render('tarefa', { id: task.id, name: task.name });
});

// Inicia o servidor Express na porta 8080 e exibe uma mensagem no console
app.listen(8080, () => {
  console.log('Iniciando servidor Express');
});
