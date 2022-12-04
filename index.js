//iniando os modulos
const express = require('express');
const session = require('express-session');



const aplicativo = express();

//Configurações do aplicativo
aplicativo.use(express.static(__dirname, + '/static/css/'));
aplicativo.use(express.json())
aplicativo.use(express.urlencoded({ extended: false }));
aplicativo.engine('.html', require('ejs').__express);
aplicativo.set('view engine', 'html', 'ejs');
aplicativo.use(session({ secret: 'segredo', resave: false, saveUninitialized: true }));



//Conexão SQL
const database = require('./connections/database');

//Modulos das tabelas SQL
const Cadastro = require('./connections/Cadastro');
const Doador = require('./connections/Doador');




//identificando a porta de comunicação
//porta servidor heroku
//const port = process.env.PORT || 8080;
//porta localhost
const porta = 3000;

//instanciando as requisições
//PAGINAS
aplicativo.get('/', function (request, response) { response.render('home') });
aplicativo.get('/acesse', function (request, response) {
    if (request.session.loggedin) {
        response.render('informacoes');

    } else {
        response.render('acesse');
    }
});
aplicativo.get('/cadastro', function (request, response) { response.render('cadastro') });
aplicativo.get('/home', function (request, response) { response.render('home') });
aplicativo.get('/error', function (request, response) { response.render('error') });
aplicativo.get('/informacoes', function (request, response) { request.params.numeroIdentificador; response.send(request.params) });
aplicativo.get('/logout', function (request, response) { response.render('logout') });
aplicativo.get('/about', function (request, response) { response.render('about') });

//ROTAS
aplicativo.post('/login', function (request, response) {
    let Num = request.body.numeroIdentificador;
    let Senha = request.body.senha;
    Cadastro.findAll({
        where: {
            numeroIdentificador: Num,
            senha: Senha
        }
    })
        .then(function (user) {
            console.log(user)
            if (user[0] != null) {
                let Numero = Num;
                request.session.loggedin = true;
                return response.render('informacoes', { Numero: Numero });
            } else {
                response.render('acesse')
            }
        })
        .catch(function (error) {
            response.render('error', { error: error })
        })
});

aplicativo.get('/logout', function (request, response) {
    request.destroy(session);
    response.render('/logout')
})



aplicativo.post('/Cadastro', function (request, response) {
    //input name do HTML
    let _senha = request.body.senha;
    let _regiao = request.body.regiao;
    let _tipoSanguineo = request.body.tipoSanguineo;
    let _dataNascimento = request.body.dataNascimento;
    let _genero = request.body.genero;
    let _peso = request.body.peso;
    let _estadoCivil = request.body.estadoCivil;
    let _parceirosSexuais = request.body.parceirosSexuais;
    let _atividadeEsportiva = request.body.atividadeEsportiva;
    let _horasSono = request.body.horasSono;
    let _qtdeRefeicoes = request.body.qtdeRefeicoes;
    let _ingestaoAcucares = request.body.ingestaoAcucares;
    let _ingestaoGordura = request.body.ingestaoGordura;
    let _ingestaoBebidas = request.body.ingestaoBebidas;
    let _drogas = request.body.drogas;
    let _cirurgias = request.body.cirurgias;
    let _anestesia = request.body.anestesia;
    let _acumpuntura = request.body.acumpuntura;
    let _amazonia = request.body.amazonia;
    let _eua = request.body.eua;
    let _vacinas = request.body.vacinas;
    let _malaria = request.body.malaria;
    let _chicungunha = request.body.chicungunha;
    let _hivAids = request.body.hivAids;
    let _parkinson = request.body.parkinson;

    Cadastro.create({
        senha: _senha,
        regiao: _regiao,
        tipoSanguineo: _tipoSanguineo,
        dataNascimento: _dataNascimento,
        genero: _genero,
        peso: _peso,
        estadoCivil: _estadoCivil,
        parceirosSexuais: _parceirosSexuais,
        atividadeEsportiva: _atividadeEsportiva,
        horasSono: _horasSono,
        qtdeRefeicoes: _qtdeRefeicoes,
        ingestaoAcucares: _ingestaoAcucares,
        ingestaoGordura: _ingestaoGordura,
        ingestaoBebidas: _ingestaoBebidas,
        drogas: _drogas,
        cirurgias: _cirurgias,
        anestesia: _anestesia,
        acumpuntura: _acumpuntura,
        amazonia: _amazonia,
        eua: _eua,
        vacinas: _vacinas,
        malaria: _malaria,
        chicungunha: _chicungunha,
        hivAids: _hivAids,
        parkinson: _parkinson

    })

        .then(function () { response.render('cadastro') })
        //.catch(function(error){response.render('error',{error: error})});
        .catch(function (error) { console.log(error) });
});


aplicativo.post('/informacoes', function (request, response) {
    //Variaveis
    //Registrar nova Doação.
let Doacao = [];
let Memoria = [];

//Definir data
let padrao = new Date();
let fmtd = padrao.toLocaleDateString();

//Monetaridade
//Bolsa de Sangue contem 450 ml
let monet = (Memoria.length * 0.450)


//Recencia
let data1 = padrao;
let data2 = new Date(Doacao[0]);
let data1Ano = data1.getFullYear();
let data2Ano = data2.getFullYear();
let data1Mes = data1.getMonth();
let data2Mes = data2.getMonth();
let recen = (data2Mes + 12 * data2Ano) - (data1Mes + 12 * data1Ano)

//frequencia
let freq = Memoria.length;


//tempo
let data3 = padrao;
let data4 = new Date(Memoria[0]);
let data3Ano = data3.getFullYear();
let data4Ano = data4.getFullYear();
let data3Mes = data3.getMonth();
let data4Mes = data4.getMonth();
let temp = (data4Mes + 12 * data4Ano) - (data3Mes + 12 * data3Ano)


//score 
//Uso de regressão logistica, Função sigmoide das variaveis acima calculando
let scor = 1 / 1 + Math.exp(recen + freq + temp)

let confirma = {
    data: fmtd,
    monetaridade: monet,
    recencia: recen,
    frequencia: freq,
    tempo: temp,
    score: scor
}
Doacao.push(confirma);
Memoria.push(Doacao)

    
    Doador.create(confirma)
        .then(function () { response.render('informacoes') })

        //.catch[function(error){response.render('error',{error:error})}]
        .catch(function (error) { console.log(error) });

})






//Chamando o servidor
// 1 => DELETAR E REINICIALIZAR Tabelas SQL.
// database.sequelize.sync({force: true}).then(function(){console.log('SERVER RESPONSE => Tabelas SQL DELETADAS E REINICIADAS.')})

// 2 => CARREGAMENTO PADRÃO.
database.sequelize.sync().then(function () { console.log('SERVER RESPONSE => Tabelas SQL SINCRONIZADAS com sucesso.') })
    .then(function () { aplicativo.listen(porta, function () { console.log(`Aplicação ATIVA E CONECTADA em http://localhost:${porta}`) }); })
    .catch(function (error) { console.log[error] });

