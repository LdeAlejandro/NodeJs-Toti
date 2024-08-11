//refacting entire code with express
//dependencias in this project, express, nodemon, ejs, sequealize, sqlite3

const express = require('express');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');
const TaskModel = require('./models/task');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my--database.db'
  });

  const tasks = TaskModel(sequelize, DataTypes);
//seteando engien para visualizar ejs
//a pasta views de este projeto e o caminho padrao da dependencias de ejs.
app.set('view engine', 'ejs')

app.get('/tarefa/', async (req, res) =>{
    // Consulta usando o modelo Sequelize, retorna apenas dados
    //const allTask = await tasks.findAll();

    // Consulta apenas dados, sem metadados
    //const allTask = await sequelize.query('SELECT * FROM Tasks', { type: sequelize.QueryTypes.SELECT});

    // Consulta geral, retorna dados e metadados
    const allTask = await sequelize.query('SELECT * FROM Tasks')

    res.json({ allTask});
})  

app.get('/tarefa/:id', async (req, res) =>{
     const taskId = req.params.id
     const task = await tasks.findByPk(taskId)

     res.render('tarefa', {id: task.id, name: task.name})
})  


app.listen(8080, () => {
    console.log('iniciando servidor express');
})

