const express = require('express'); // Importa a biblioteca Express para configurar e gerenciar o servidor HTTP.
const mongoose = require('mongoose'); // Importa a biblioteca Mongoose para interagir com o banco de dados MongoDB.
const Task = require('./models/task'); // Importa o modelo `Task` definido em `./models/task`, que representa a estrutura dos dados de tarefa no MongoDB.
const mongoUrl = 'mongodb://localhost:27017/TotiMongoose';// URL de conexão com o MongoDB. O banco de dados é nomeado "TotiMongoose" e está rodando localmente na porta 27017.

// Conecta ao banco de dados MongoDB usando a URL fornecida.
mongoose.connect(mongoUrl);

// Cria uma instância do aplicativo Express.
const app = express();

// Define a porta na qual o servidor irá escutar as requisições HTTP.
const port = 3000;

// Obtém a conexão atual com o banco de dados MongoDB.
const db = mongoose.connection

// Define um manipulador de erro para a conexão com o MongoDB, que imprimirá detalhes do erro no console.
db.on('error', console.error.bind(console, 'MongoDB deu erro'));

// Define um manipulador para o evento 'open' da conexão, que indica uma conexão bem-sucedida ao MongoDB.
// Imprime uma mensagem no console para confirmar a conexão bem-sucedida.
db.once('open', () => {
    console.log('Conexão ao MongoDB bem-sucedida');
});

// Define uma rota GET para "/create" que cria uma nova tarefa no banco de dados e a retorna como resposta JSON.
app.get('/create', async (req, res) => {
    // Cria uma nova tarefa com o nome 'Comprar leite' usando o modelo `Task`.
    const task = await Task.create({ name: 'Comprar leite' });

    // Envia a tarefa criada como resposta JSON.
    res.json({ task });
});

// Define uma rota GET para "/read" que retorna todas as tarefas armazenadas no banco de dados como resposta JSON.
app.get('/read', async (req, res) => {
    // Encontra todas as tarefas no banco de dados.
    const task = await Task.find({});

    // Envia todas as tarefas encontradas como resposta JSON.
    res.json({ task });
});

// Define uma rota GET para "/read/:id" que retorna uma tarefa específica com base no ID fornecido na URL como resposta JSON.
app.get('/read/:id', async (req, res) => {
    // Encontra uma tarefa pelo ID fornecido nos parâmetros da URL.
    const task = await Task.findById(req.params.id);

    // Envia a tarefa encontrada como resposta JSON.
    res.json({ task });
});

// Define uma rota GET para "/update/:id" que atualiza uma tarefa específica com base no ID fornecido na URL e retorna a tarefa atualizada como resposta JSON.
app.get('/update/:id', async (req, res) => {
    // Encontra a tarefa pelo ID fornecido nos parâmetros da URL.
    const task = await Task.findById(req.params.id);

    // Atualiza o nome e o status da tarefa.
    task.name = 'Fazer Exercicio';
    task.status = true;

    // Salva as alterações feitas na tarefa no banco de dados.
    await task.save();

    // Envia a tarefa atualizada como resposta JSON.
    res.json({ task });
});

// Define uma rota GET para "/delete/:id" que remove uma tarefa específica do banco de dados com base no ID fornecido na URL.
app.get('/delete/:id', async (req, res) => {
    // Remove a tarefa com o ID fornecido nos parâmetros da URL.
    await Task.deleteOne({ _id: req.params.id });

    // Imprime uma mensagem no console indicando que a tarefa foi removida.
    console.log('Deleted from Mongo!: ', req.params.id);

    // Envia uma mensagem indicando que a tarefa foi deletada como resposta.
    res.send('Deleted');
});

// Inicia o servidor Express na porta definida e imprime uma mensagem no console indicando que o servidor está escutando.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
