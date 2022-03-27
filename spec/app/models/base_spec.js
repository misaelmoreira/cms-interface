var Base = require("../../../app/models/base");

describe("O modelo de base", function(){
    
    describe("com o metodo salvar", function(){
        it("deve inclur na API", function(done){
            var base = new Base();
            expect(base.salvar !== undefined).toBe(true);
            done();                        
        });
    });

    describe("com o metodo todos", function(){
        it("deve exibir todos os bases pela API", function(done){
            var base = new Base();
            expect(base.todos !== undefined).toBe(true);
            done();            
                     
        });
    });

});