const botaoCurtir = document.querySelectorAll(".curtir");

botaoCurtir.forEach(funtion(botaoCurtir){
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtiu);
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