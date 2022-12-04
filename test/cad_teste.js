const { newDoador } = require('../script/cadastro');

describe("NewDoador pede confirmação de veracidade de informações", function(){
    test("Ele perguntar ao usuário", function(){
        expect(newDoador()).toBe(true)
    })
});