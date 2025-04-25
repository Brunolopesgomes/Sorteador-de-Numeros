function sortear(){

let quantidade = parseInt(document.getElementById('quantidade').value);
let de = parseInt(document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);

let listaSorteados = [];
let numero;

    for (let i = 0 ; i < quantidade;i++){
    let numero = gerarNumeroAleatorio(de,ate);
    
     while(listaSorteados.includes(numero)){
     numero = gerarNumeroAleatorio(de,ate);

     }
     listaSorteados.push(numero);

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:${listaSorteados}</label>`;

    alterarBotaoReiniciar();
}

function gerarNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


function alterarBotaoReiniciar(){

    let botao2 = document.getElementById('btn-reiniciar');
   

    if (botao2.classList.contains('container__botao-desabilitado')){
        botao2.classList.remove('container__botao-desabilitado');
        botao2.classList.add('container__botao');

    }else{
        botao2.classList.remove('container__botao');
        botao2.classList.add('container__botao-desabilitado');



    }
  
}

function reiniciar(){
    
(document.getElementById('quantidade').value)= '';
(document.getElementById('de').value)= '';
(document.getElementById('ate').value) = '';

alterarBotaoReiniciar();
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum Numero</label>`;

}
