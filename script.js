const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(funtion(botaoCurtir){
    let curtiu = false;
    botaocurtir.addEventListener("click", curtir);

function curtir(){
    const contador = botaoCurtir.querySelector("span");
    if(curtiu === false){ 
    contador.rexrContent++;
    curtiu = true;}
    else{
        contador.textContent--;
        curtiu = false;
    }
}
});