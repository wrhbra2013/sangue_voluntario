 let user = [];

function acessar(){
let Num = document.getElementById('numeroIdentificador').value;
let Senha = document.getElementById('senha').value;

let confirma = { 
    numeroIdentificador: Num,
    senha: Senha
}

if (confirma  != user){
    user.push(confirma);
    alert('Doador '+ user.length + ' AUTORIZADO!');
    
}else{
    alert('Doador NÃO autorizado!!! \n Por favor acesse Novo Cadastro !')
   
}
};
