const request = require("request");

Usuario = require("../models/usuario");

var UsuarioController = {
    index: function(req, res, next) {
        Usuario.todos(function(usuarios){
            res.render('usuarios/index', { 
                title: 'trazer os dados da API',
                usuarios: usuarios
            });            
        });
    },

    novo: function(req, res, next) {
        var erro = req.query.erro;
        if(erro === undefined){
            erro = "";
        }
        res.render('usuarios/novo', {erro: erro}); 
    },

    cadastrar: function(req, res, next) {
        var usuario = new Usuario();
        usuario.nome = req.body.nome;
        usuario.login = req.body.login;
        usuario.senha = req.body.senha;
        usuario.email = req.body.email;
        usuario.salvar(function(retorno){
            if(retorno.erro){              
                res.redirect('/usuarios/novo?erro=' + retorno.mensagem); 
            }
            else {
                res.redirect('/usuarios'); 
            }            
        });         
    }


};

module.exports = UsuarioController;