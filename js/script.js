/* Animação texto com nome */

function textoMovendo(texto){

    const textoArray = texto.innerHTML.split("");
    texto.innerHTML = '';
    
    textoArray.forEach(function (letra, i){
        setTimeout(function (){
            texto.innerHTML += letra;
        }, 100 * i);
    });

}

const textoOla = document.querySelector('.hello');
const textoSejaBem = document.querySelector('.bemvindo');
const textoWeverton = document.querySelector('.name');
textoMovendo(textoOla);
textoMovendo(textoSejaBem);
textoMovendo(textoWeverton);


/*  */

