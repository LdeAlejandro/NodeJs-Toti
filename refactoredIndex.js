//refacting entire code with express

const express = require('express');
const app = express();

app.get('/fotos', (req, res) =>{
    res.send('<html><body><h1>GET rotas fotos</h1></body></head></html>');
   
//    <html><body><h1>GET rotas cachorros</h1></body></head></html>
//     <html><body><h1>GET rota incorreta</h1></body></head></html>
})

app.listen(8080, () => {
    console.log('iniciando servidor express');
})

 