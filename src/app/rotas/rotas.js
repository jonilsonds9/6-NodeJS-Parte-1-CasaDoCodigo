const LivroDAO = require('../infra/livro-dao');
const db = require('../../config/database');

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

    const livroDAO = new LivroDAO(db);
    livroDAO.lista()
            .then(livros => res.marko(
              require('../views/livros/lista/lista.marko'),
              {
                livros: livros
              }
            ))
            .catch(erro => console.log(erro));
  });

  app.get('/livros/form', function(req, res) {
    res.marko(require('../views/form/form.marko'));
  });
  
  app.post('/livros', function(req, res) {
    console.log(req.body);

    const livroDAO = new LivroDAO(db);
    livroDAO.adiciona(req.body)
            .then(res.redirect('/livros'))
            .catch(erro => console.log(erro));
  });

  app.delete('/livros/:id', function(req, res) {
    const id = req.params.id;

    const livroDAO = new LivroDAO(db);
    livroDAO.remove(id)
            .then(() => res.status(200).end())
            .catch(erro => console.log(erro));
  });

  // app.get('/busca/:id', function(req, res) {
  //   console.log(req.params.id);

  //   const livroDAO = new LivroDAO(db);
  //   livroDAO.buscaPorId(req.params.id)
  //           .then((resultado) => console.log(resultado))
  //           .catch(erro => console.log(erro));
  // });

  // app.get('/atualiza/:id', function(req, res) {
  //   res.marko(require('../views/form/form.marko'));
  // });

  // app.post('/atualiza/:id', function(req, res) {
  //   console.log(req.params.id);
  //   console.log(req.body);

  //   const livroDAO = new LivroDAO(db);
  //   livroDAO.atualiza(req.params.id, req.body)
  //           .then(res.redirect('/livros'))
  //           .catch(erro => console.log(erro));
  // });
};
