const database = require('./database');
const Doador = require('./Doador');
//Doacoes;

     const Doacoes = database.sequelize.define('doacoes',{

        numeroIdentificador:{
            type: database.Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true                               
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
    

       


 module.exports = Doacoes;
    




//Reeditar a tabela
//Doacoes.sync({force: true}).then(()=> {console.log('Tabela DELETADA e REINICIADA')})

