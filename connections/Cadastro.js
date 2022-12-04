
const { Association } = require('sequelize');
const database = require('./database');
const Doacoes = require('./Doacoes');
const Doador = require('./Doador');

 
    const Cadastro = database.sequelize.define('cadastro',
{
    numeroIdentificador:{
        type: database.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true                               
     },
     senha:{
         type: database.Sequelize.STRING(10),
         alowNull: false
 
     },
     regiao:{
         type: database.Sequelize.STRING(20),
         alowNull: false
     },
     tipoSanguineo:{
         type: database.Sequelize.STRING(15),
         alowNull: true
 
     },  
     dataNascimento:{
         type: database.Sequelize.DATEONLY,
         alowNull: false
     },
     genero:{
         type: database.Sequelize.STRING(10),
         alowNull: false
     },
     peso:{
         type: database.Sequelize.INTEGER,
         alowNull: false
 
     },
     estadoCivil:{
         type: database.Sequelize.STRING(20),
         alowNull: false
     },
     parceirosSexuais:{
         type: database.Sequelize.INTEGER,
         alowNull: true
     },
     atividadeEsportiva:{
         type: database.Sequelize.STRING(5),
         alowNull: false
     },
     horasSono:{
         type: database.Sequelize.INTEGER,
         alowNull: false
     },
     qtdeRefeicoes:{
         type: database.Sequelize.STRING(9),
         alowNull: false
     },
     ingestaoAcucares:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     ingestaoGordura:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     ingestaoBebidas:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     drogas:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     cirurgias:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     anestesia:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     acumpuntura:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     amazonia:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     eua:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     vacinas:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     malaria:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     chicungunha:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     hivAids:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     parkinson:{
         type: database.Sequelize.STRING(4),
         alowNull: false
     },
     

     })
     
Cadastro.hasOne(Doador);
Doador.belongsTo(Cadastro);
Doacoes.belongsTo(Doador);

     
     
module.exports = Cadastro;




//Sobrescrever tabela.,
//Doadores.sync({force: true}).then(()=>{console.log('Tabela doador REFORMATADA com SUCESSO!!!')}).catch((error)=>{console.log(error)})

//Usuario padrão
//Doador.create({
//    numero_identificador: '1',
//    senha: 'admin'
//});



    
