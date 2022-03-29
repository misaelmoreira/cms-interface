var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({ Given, When, Then}){

    Given('the initial page', function(callback){
        this.driver.get('http://local.com.br:3001');
        callback();
    });

    Given('I have the content table in body', function(callback){
        this.driver.findElement({css:'body'});
        callback();
    });

    Then('I should have text {arg1:stringDoubleQuotes} on the page', function(title, callback){
        this.driver.findElements({css: 'h1'}).then(function(h1){
            h1[0].getAttribute("innerText").then(function(text){
                if(text === title){
                    callback();
                }
                else{
                    callback(new Error( "The title of body is different, body:(" + text + "), test: (" + title + ")"));
                }
            })
        });
        callback();
    })
})

function CustomWorld(){
    this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();
}

defineSupportCode(function({setWorldConstructor}){
    setWorldConstructor(CustomWorld);
})

module.exports = function() {
    this.setDefaultTimeout(60 * 1000);
}