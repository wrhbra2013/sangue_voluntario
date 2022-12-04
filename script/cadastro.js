
let doador = [];

//inputs HTML
let senha = document.getElementById('senha').value;
let regiao = document.getElementById('regiao').value;
let tipoSanguineo = document.getElementById('tipoSanguineo').value;
let dataNascimento = document.getElementById('dataNascimento').value;
let genero = document.getElementById('genero').value;
let peso = document.getElementById('peso').value;
let estadoCivil = document.getElementById('estadoCivil').value;
let parceirosSexuais = document.getElementById('parceirosSexuais').value;
let atividadeEsportiva = document.getElementById('atividadeEsportiva').value;
let horasSono = document.getElementById('horasSono').value;
let qtdeRefeicoes = document.getElementById('qtdeRefeicoes').value;
let ingestaoGordura = document.getElementById('ingestoGordura').value;
let ingestaoBebidas = document.getElementById('ingestaoBebidas').value;
let ingestaoAcucares = document.getElementById('ingestaoAcucares').value;
let drogas = document.getElementById('drogas').value;
let cirurgias = document.getElementById('cirurgias').value;
let anestesia = document.getElementById('anestesia').value;
let acumpuntura = document.getElementById('acumpuntura').value;
let amazonia = document.getElementById('amazonia').value;
let eua = document.getElementById('eua').value;
let vacinas = document.getElementById('vacinas').value;
let malaria = document.getElementById('malaria').value;
let hivAids = document.getElementById('hivAids').value;
let chicungunha = document.getElementById('chicungunha').value;
let parkinson = document.getElementById('parkinson').value;



function newDoador() {
    return confirm('Você declara ser honesto e veridico estas informções?')
};
function impedimentos() {

    return alert('Condição DESFAVORÁVEL a doação. Favor buscar informações no HemoCentro mais próximo.')

};
//Data de referencia
let formato = new Date();
let dt = formato.toLocaleDateString;
//Condição idade
let d1 = dataNascimento;
let dif = formato.d1 - formato;
let anos = dif / (1000 * 60 * 60 * 24);


if (newDoador() == true) {   
    //Idade insuficiente 
    if (anos < 18 || anos > 69)   
    //Condiação peso
    if (peso < 50) 
    //Critérios impeditivos
    if (ingestaoBebidas, 
        drogas,
        cirurgias,
        anestesia,
        acumpuntura,
        amazonia,
        eua,
        vacinas,
        malaria,
        hivAids,
        chicungunha,
        parkinson == "Sim") 
        impedimentos();
        else{
            doador.push({
                senha:                senha,
                regiao:               regiao,
                tipoSanguineo:        tipoSanguineo,
                dataNascimento:       dataNascimento,
                genero:               genero,
                peso:                 peso,
                estadoCivil:          estadoCivil,
                parceirosSexuais:     parceirosSexuais,
                atividadeEsportiva:   atividadeEsportiva,
                horasSono:            horasSono,
                qtdeRefeicoes:        qtdeRefeicoes,
                ingestaoAcucares:     ingestaoAcucares,
                ingestaoGordura:      ingestaoGordura,
                ingestaoBebidas:      ingestaoBebidas,
                drogas:               drogas,
                cirurgias:            cirurgias,
                anestesia:            anestesia,
                acumpuntura:          acumpuntura,
                amazonia:             amazonia,
                eua:                  eua,
                vacinas:              vacinas,
                malaria:              malaria,
                chicungunha:          chicungunha,
                hivAids:              hivAids,
                parkinson:            parkinson
            })
        alert('Parabéns pela INICIATIVA. \n  Você é o Doador n.ª ' + doador[0] + 'e a sua senha é ' + doador[1] + 'Por favor proceda com o LOGIN.')


   }
};
        






/*function item(a){
  let a = a;
  
  let form = document.getElementById('form' + a);
  if (form.style.display ==="block"){
      form.style.display == "none";
  }else{
      form.style.display = "none";
  }};*/


//Funções de Acessibilidade.
function contrast() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

};
function font_mais() {
    let tamanho = 20;
    document.body.style.fontSize = tamanho + "px";
    tamanho++;
};
