//Executar depois da DOM ser totalmente carregada.
window.onload=function(){
let b1 = document.querySelector('#box1');
let b2 = document.querySelector('#box2');
let b3 = document.querySelector('#box3');

b1.addEventListener("click", link1);
b2.addEventListener("click", link2);
b3.addEventListener("click", link3);

};




function link1(){ return window.location.hash = "./views/informacoes.html";}

function link2(){ return window.location.hash = "./views/cadastro.html";}

function link3(){ return document.location.hash = "./views/acesse.html";}

