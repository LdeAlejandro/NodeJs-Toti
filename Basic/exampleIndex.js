const http = require('http');

const port = 3050;

const okResp = 200;
const okPost = 201;
const okAccepted = 202;
const okDelete = 204;
const badReqResp = 400;

const server = http.createServer((req, res) => {
    console.log(req.socket.remoteAddress);

    if (req.url === "/users") {
        if (req.method === "GET") {
          res.end(`LISTAGEM DE TODOS USUARIOS`);
        } else if (req.method === "POST") {
          res.end(`CRIACAO DE USUARIO`);
        } else if (req.method === "PATCH") {
          res.end(`ATUALIZAÇÃO DE USUARIO`);
        } else if (req.method === "DELETE") {
          res.end(`DELEÇÃO DE USUARIO`);
            //200 ok
            //202 accepted
            //204 No content  nao rederizara res.end
            res.writeHead(204);
            res.end(`DELEÇÃO DE USUARIO`);

        } else {
          res.end(`NAO AUTORIZADO`);
        }
      } else if (req.url ==="/posts"){

        if (req.method === "GET") {
            res.end(`LISTAGEM DE POSTS`);
          } else if (req.method === "POST") {
            res.end(`CARREGAR POSTS`);
          } else if (req.method === "PATCH") {
            res.end(`ATUALIZAÇÃO DE POSTS`);
          } else if (req.method === "DELETE") {
            res.end(`DELEÇÃO DE POSTS`);
          } else {
            res.end(`NAO AUTORIZADO`);
          }

      } else if (req.url ==="/photos"){

        if (req.method === "GET") {
            res.end(`LISTAGEM DE FOTOS`);
          } else if (req.method === "POST") {
            res.end(`CARREGAR FOTOS`);
          } else if (req.method === "PATCH") {
            res.end(`ATUALIZAÇÃO DE FOTOS`);
          } else if (req.method === "DELETE") {
            res.end(`DELEÇÃO DE FOTOS`);
          } else {
            res.end(`NAO AUTORIZADO`);
          }

      }

})

server.listen(port, () => {
    console.log("SERVER UP PORT:", port);
});