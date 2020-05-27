const http = require('http');

const servidor = http.createServer(function(req, resp) {
  resp.end(`
    <!DOCTYPE html>
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <h1> Casa do Código </h1>
    </body>
    </html>
  `)
});
servidor.listen(3000);