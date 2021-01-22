const db = require("../models");
const Livro = db.livro;

// Adicionar um novo livro
exports.create = (req, res) => {
    // Verifica se existem as informações necessárias para adicionar um livro
    if (!req.body.isbnLivro || !req.body.autorLivro || !req.body.tituloLivro || !req.body.qtdExemplares) {
        // Se não existir, retorna uma mensagem de erro.
        res.status(400).send({ msg: "Requisição incompleta: dados ausentes" });
        // Encerra a função.
        return;
    }

    // Caso a requisição possua todos as informações necessárias, é hora de criar o objeto...
    const livro = new Livro({
        isbnLivro: req.body.isbnLivro,
        autorLivro: req.body.autorLivro,
        tituloLivro: req.body.tituloLivro,
        qtdExemplares: req.body.qtdExemplares,
    });
    // Depois de criado o objeto, vamos salvá-lo no banco de dados.
    livro.save(livro).then(data => {
        // Caso o dado seja armazenado com sucesso, retorna o registro do MongoDB (o livro recém cadastrado).
        res.send(data)
    }).catch(err => {
        // Caso haja algum problema, identifica um erro 500 e uma mensagem de erro qualquer
        res.status(500).send({
            msg: err.message
        });
    });
};



// Retornar a lista de livros
exports.findAll = (req, res) => {
    /* 
    Neste exemplo, queremos retornar todos os elementos que atendem a determinada condição. 
    Caso a condição esteja vazia (como é o caso aqui), então todos os livros atendem à condição (retornando a lista de livros completa).
    */
    var condition = {};

    Livro.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao obter lista de livros"})
    });
};

// Atualizar um livro
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ msg: "Dados inválidos" });
        return;
    }

    const isbnLivro = req.params.isbnLivro;

    Livro.findByIdAndUpdate(isbnLivro, req.body).then(data => {
        if (!data) {
            res.status(400).send({ msg: "Não foi possível atualizar o livro" })
        } else {
            res.send({ msg: "Produto atualizado com sucesso" });
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao atualizar o livro" });
    });

};

// Remover um livro específico
exports.delete = (req, res) => {
    const isbnLivro = req.params.isbnLivro;
    Livro.findByIdAndRemove(isbnLivro).then(data => {
        if (!data) {
            res.status(400).send({ msg: "Não foi possível remover o Produto" })
        } else {
            res.send({ msg: "Produto deletado com sucesso" });
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao deletar o Produto" });
    });
};
