let botaoJedi = document.querySelector('.jedi');
let botaoSith = document.querySelector('.sith');
let paginaSabre = document.querySelector('#pagina-sabre');
let paginaEscolha = document.querySelector('#pagina-escolha');
let spanLamina = document.querySelector('.lamina');

function audioAcender(){
    let audio = new Audio();
    audio.src = 'media/lightsaber_on.mp3';
    audio.play();
}

function audioApagar(){
    let audio2 = new Audio();
    audio2.src = 'media/lightsaber_off.mp3';
    audio2.play();
}

function alternarSabre(){   
    if(spanLamina.style.opacity == 1){
        spanLamina.style.opacity = '0';
        audioApagar();
    }else{
        spanLamina.style.opacity = '1';
        audioAcender();
    }

}

function escolherJedi(){
    paginaSabre.style.display = 'flex';
    paginaEscolha.style.display = 'none';
}

function escolherSith(){
    paginaSabre.style.display = 'flex';
    paginaEscolha.style.display = 'none';
    spanLamina.style.background = 'linear-gradient(90deg, #c70505, #c45151, #c70505)';
    spanLamina.style.boxShadow = '0px 0px 30px #c70505'
}

paginaSabre.onclick = alternarSabre;

botaoJedi.onclick = escolherJedi;

botaoSith.onclick = escolherSith;
