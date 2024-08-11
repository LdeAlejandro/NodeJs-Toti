//refacting entire code with express
//dependencias in this project, express, nodemon, ejs

const express = require('express');
const app = express();

//seteando engien para visualizar ejs
//a pasta views de este projeto e o caminho padrao da dependencias de ejs.
app.set('view engine', 'ejs')

app.get('/fotos', (req, res) =>{
    //res.send('<html><body><h1>GET rotas fotos</h1></body></head></html>');
    //renderizando con query, exemplo de requisicao: http://localhost:8080/fotos?nome=Alejandro
    res.render('fotos', { nome: req.query.nome})
})  

app.get('/cachorros', (req, res) =>{
    res.send('<html><body><h1>GET rotas cachorros</h1></body></head></html>');
})
//     <html><body><h1>GET rota incorreta</h1></body></head></html>

app.post('/', (req, res) =>{
    res.send('Resposta Post');
})

app.post('/cachorros', (req, res) =>{
    res.send('Adotando novo cachorro');
})

app.listen(8080, () => {
    console.log('iniciando servidor express');
})

