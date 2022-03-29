Feature: Test or register users 
    Need to register a user

    Scenario: Register a user
        Given that I am in the registration page "http://local.com.br:3001/usuarios"
        And click on the new button
        And fill in the field name "BDD test"
        And fill in the field login "bdd"
        And fill in the field password "bdd"
        And fill in the field email "bdd@teste.com"
        And click the save button
        Then I must see the message of sucess