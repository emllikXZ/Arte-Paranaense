const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function (botaoCurtir) {
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
    function curtir() {
        const contador = botaoCurtir.querySelector("span");
        if (curtiu === false) {
            contador.textContent++;
            curtiu = true;
        }
        else {
            contador.textContent--;
            curtiu = false;
        }
    }
});

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
     const corpoPagina = document.body;
     if (corpoPagina.classList.constains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
     } else {
        corpoPagina.classList.add("tema-escuro");
     }
}