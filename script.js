const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(funtion(botaoCurtir){
    let curtiu = false;
    botaocurtir.addEventListener("click", curtiu);

function curtir(){
    const contador = botaoCurtir.querySelector("span");
    if(curtiu === false){ 
    contador.textContent++;
    curtiu = true;}
    else{
        contador.textContent--;
        curtiu = false;
    }
}
});