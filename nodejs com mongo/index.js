const express = require('express');
const mongoose = require('mongoose');
//importando modelo da task
const Task = require('./models/task');

const mongoUrl = 'mongodb://localhost:27017/TotiMongoose';
mongoose.connect(mongoUrl);

const app = express();
const port = 3000;

const db = mongoose.connection

//em caso de error printar detalhes
db.on('error', console.error.bind(console, 'MongoDB deu erro'));

db.once('open', () => {
    console.log('Conexão ao MongoDB bem-sucedida');
  });

app.get('/create', async (req, res ) => {
    const task = await Task.create({name: 'Comprar leite'});

    res.json({task});
})

app.get('/read', async (req, res ) => {
    const task = await Task.find({});

    res.json({task});
})

app.get('/read/:id', async (req, res ) => {
    const task = await Task.findById(req.params.id);

    res.json({task});
})

app.get('/update/:id', async (req, res ) => {
    const task = await Task.findById(req.params.id);

    task.name = 'Fazer Exercicio'
    task.status = true;

    await task.save();
    res.json({task});
});

app.get('/delete/:id', async (req, res) => {


     await Task.deleteOne({ _id: req.params.id });
     
        console.log('Deleted from Mongo!: ', req.params.id);
        res.send('Deleted');
   
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});