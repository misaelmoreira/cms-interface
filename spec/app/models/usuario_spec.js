var Usuario = require("../../../app/models/usuario");

describe("O modelo de usuario", function(){
    describe("com atributos", function(){
        it("id precisa ser valido", function(){
            var usuario = new Usuario();    
            expect(usuario.id).toBe(0);
        });
        it("nome precisa ser valido", function(){
            var usuario = new Usuario();
            expect(usuario.nome).toBe("");
        });
        it("login precisa ser valido", function(){
            var usuario = new Usuario();
            expect(usuario.login).toBe("");
        });
        it("senha precisa ser valido", function(){
            var usuario = new Usuario();
            expect(usuario.senha).toBe("");
        });
        it("email precisa ser valido", function(){
            var usuario = new Usuario();
            expect(usuario.email).toBe("");
        });
    });
    describe("com o metodo salvar", function(){
        it("deve inclur na API", function(done){
            var usuario = new Usuario();
            usuario.nome = "teste criado pela interface";
            usuario.login = "interface";
            usuario.senha = 123;
            usuario.email = "interface@test.com";
            usuario.salvar(function(retorno){
                expect(retorno.erro).toBe(false);
                done();
            });            
        });
    });

    describe("com o metodo todos", function(){
        it("deve exibir todos os usuarios pela API", function(done){
            Usuario.todos(function(retorno){
                expect(retorno.length >= 0).toBe(true);
                done();
            });
            
                     
        });
    });

});