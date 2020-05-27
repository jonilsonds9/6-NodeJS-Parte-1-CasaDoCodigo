const http = require('http');

const servidor = http.createServer(function(req, resp) {

  let html = '';
  if (req.url == '/') {
    html = `
    <!DOCTYPE html>
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <h1> Casa do Código </h1>
    </body>
    </html>
  `;
  } else if (req.url == '/livros') {
    html = `
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
  }

  // outros else if

  resp.end(html);
});
servidor.listen(3000);