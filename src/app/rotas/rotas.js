module.exports = (app) => {
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
    res.marko(
      require('../views/livros/lista/lista.marko'),
      {
        livros: [
          {
            id: 1,
            titulo: 'Fundamentos do Node'
          },
          {
            id: 2,
            titulo: 'Node avançado'
          }
        ]
      }
    );
  });
};
