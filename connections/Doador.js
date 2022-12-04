const Cadastro = require('./Cadastro');
const database = require('./database');
const Doacoes = require('./Doacoes');
const Doadores = require('./Doador');
//Doacoes;

     const Doador = database.sequelize.define('doadores',{

        numeroIdentificador:{
            type:database.Sequelize.INTEGER,
               },
        data:{
            type: database.Sequelize.DATEONLY,
            
    
        },
        recencia:{
            type:database.Sequelize.INTEGER
    
        },
        frequencia:{
            type:database.Sequelize.INTEGER
        },
        monetaridade:{
            type:database.Sequelize.INTEGER
        },
        tempo:{
            type:database.Sequelize.INTEGER
        },
        score:{
            type:database.Sequelize.INTEGER
        }
        
    
    },
    {
        timestamps: false
    });

   


 module.exports = Doador;

 

 
    




//Reeditar a tabela
//Doacoes.sync({force: true}).then(()=> {console.log('Tabela DELETADA e REINICIADA')})

