Usuario = require("../models/usuario");

var UsuarioController = {
    index: function(req, res, next) {
        Usuario.todos(function(usuarios){
            res.render('usuarios/index', { 
                title: 'trazer os dados da API',
                usuarios: usuarios
            });            
        });
    }
};

module.exports = UsuarioController;