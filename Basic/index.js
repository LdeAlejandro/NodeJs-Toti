const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {

    if(req.method === 'GET'){
        
        if(req.url === '/fotos'){
            res.writeHead(200);
            res.end('<html><body><h1>GET rotas fotos</h1></body></head></html>');
            
        }else if(req.url === '/cachorros'){
            res.writeHead(200);
            res.end('<html><body><h1>GET rotas cachorros</h1></body></head></html>');
        }else{
            res.writeHead(400);
            res.end('<html><body><h1>GET rota incorreta</h1></body></head></html>');
        }
      
    }else if (req.method  === 'PUT'){
        res.writeHead(200);
        res.end('Respondendo requisicao PUT!');

    }else if (req.method  === 'DELETE'){
        res.writeHead(204);
        res.end('Respondendo requisicao DELETE!');

    }else{
        res.writeHead(400);
        res.end('Nao sei tratar esse metodo HTTP:' + req.method);

    }
})

server.listen(port, () => {
    console.log("SERVER UP PORT:", port);
});