var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({ Given, When, Then}){

    var tituloNovoCadastro = undefined;

    Given('that I am in the registration page {stringInDoubleQuotes}', function (url, callback) {
        //this.driver.sleep(800);
        this.driver.get(url);
        callback();
    });

    Given('click on the new button', function (callback) {
        //this.driver.sleep(800);
        this.driver.findElement({css:'#novo-registro'}).then(function(element){
            element.click();
            callback(); //serve para dizer que acabou a operação node.js
        });
    });     

    Given('fill in the field {arg1:stringInDoubleQuotes} with {arg2:stringInDoubleQuotes}', function (campo, valor, callback) {
        //this.driver.sleep(800);
        if (campo === "nome" ){
            tituloNovoCadastro = valor + " - " + new Date().toString();
            valor = tituloNovoCadastro;
        }

        this.driver.findElement({css:'input[name="' + campo + '"]'}).sendKeys(valor);
        //this.driver.sleep(800);
        callback();
    });

    Given('click the save button', function (callback) {
        this.driver.findElement({css:'input[type="submit"]'}).then(function(element){
            element.click();
            callback(); //serve para dizer que acabou a operação node.js
        });
    });

    Then('I must see the new register', function(callback){
        this.driver.findElement({css:'tr:last-child td'}).then(function(element){
            element.getText().then(function(textValue){
                if (tituloNovoCadastro !== textValue){
                    throw "regsiter not found, register should be = ("+ tituloNovoCadastro + "), and return = (" + textValue + ")";
                }
                callback();
            });
        });
    });

   
});

 