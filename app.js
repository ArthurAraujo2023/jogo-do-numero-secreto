let listaDeNumeroSecreto = [];
let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNaTela(tag, texto){
    let titulo = document.querySelector(tag)
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female",{rate:1.2});

}

function welcome(){
    exibirTextoNaTela("h1", "Bem vindo ao jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10 ?");
    
}

welcome();

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Parabéns você acertou");
        exibirTextoNaTela("p", "Mandou bem haha");
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else if(chute < numeroSecreto){
        exibirTextoNaTela("h1", "tente de novo");
        exibirTextoNaTela("p", "O número é maior que o chute");

    } else{
        exibirTextoNaTela("h1", "tente de novo");
        exibirTextoNaTela("p","O número é menor que o chute");
    }
    limparCampo();

}

function limparCampo(){
    let limpar = document.querySelector("input");
    limpar.value = " ";
}

function gerarNumeroAleatorio() {
    let gerardorDeNumeroSecreto = Math.floor(Math.random() * 10 + 1);
    let listaDeNumerosSorteados = listaDeNumeroSecreto.length;

    if(listaDeNumerosSorteados == 10){
        listaDeNumeroSecreto = [];
    }
    

    if(listaDeNumeroSecreto.includes(gerardorDeNumeroSecreto)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumeroSecreto.push(gerardorDeNumeroSecreto);
        console.log(listaDeNumeroSecreto);
       return gerardorDeNumeroSecreto;
}

 }
function reiniciarjogo(){
    welcome();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
}


