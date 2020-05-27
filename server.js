const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log(`Servidor rodando na porta 3000`);
});

app.get('/', function(req, res) {
  res.send(
    `
      <!DOCTYPE html>
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
      <body>
        <h1> Casa do Código </h1>
      </body>
      </html>
    `
  );
});

app.get('/livros', function(req, res) {
  res.send(
    `
      <!DOCTYPE html>
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
      <body>
        <h1> Listagem de livros </h1>
      </body>
      </html>
    `
  );
});

// const http = require('http');

// const servidor = http.createServer(function(req, resp) {

//   let html = '';
//   if (req.url == '/') {
  //   html = `
  //   <!DOCTYPE html>
  //   <head>
  //     <meta charset="UTF-8">
  //     <title>Document</title>
  //   </head>
  //   <body>
  //     <h1> Casa do Código </h1>
  //   </body>
  //   </html>
  // `;
//   } else if (req.url == '/livros') {
//     html = `
//     <!DOCTYPE html>
//     <head>
//       <meta charset="UTF-8">
//       <title>Document</title>
//     </head>
//     <body>
//       <h1> Listagem de livros </h1>
//     </body>
//     </html>
//   `
//   }

//   // outros else if

//   resp.end(html);
// });
// servidor.listen(3000);