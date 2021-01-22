module.exports = app => {
    const livro = require("../controllers/livro.controller.js");
  
    var router = require("express").Router();
  
    // Insere novo livro
    router.post("/", livro.create);
  
    // Retorna todos livros
    router.get("/", livro.findAll);
  
    // Atualiza o livro dado seu isbnLivro
    router.put("/:isbnLivro", livro.update);
  
    // Remove um livro dado seu isbnLivro
    router.delete("/:isbnLivro", livro.delete);
  
    app.use('/api/livros', router);
  };