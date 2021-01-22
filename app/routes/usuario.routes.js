module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    // Insere novo usuario
    router.post("/", usuario.create);
  
    // Retorna todos usuários
    router.get("/", usuario.findAll);
  
    // Retorna o usuario dado seu cpf
    router.get("/:cpf", usuario.findOne);
  
    // Atualiza o usuario dado seu cpf
    router.put("/:cpf", usuario.update);
  
    // Remove um usuario dado seu cpf
    router.delete("/:cpf", usuario.delete);
  
    app.use('/api/usuarios', router);
  };