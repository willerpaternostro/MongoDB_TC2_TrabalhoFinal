module.exports = app => {
  const livro = require("../controllers/livro.controller.js");
  const usuario = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    // Insere novo livro
    router.post("/", livro.create);
  
    // Retorna todos livros
    router.get("/", livro.findAll);
  
    // Atualiza o livro dado seu isbnLivro
    router.put("/:isbnLivro", livro.update);
  
    // Remove um livro dado seu isbnLivro
    router.delete("/:isbnLivro", livro.delete);

    //***********USUARIOS**************
    
    router.post("/user", usuario.criar);
  
    
    router.get("/user", usuario.obterTodos);
  
    
    router.put("/user/:id", usuario.atualizar);
  
    
    router.delete("/user/:id", usuario.excluir);

   
  
    app.use('/api/biblioteca', router);
    
  };