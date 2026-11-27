        document.addEventListener("DOMContentLoaded", () => {
            // Inicializa os ícones Lucide
            if (typeof lucide !== "undefined") {
                lucide.createIcons();
            }

            const btnTema = document.getElementById("btnTemaEscuro");

            const botoesCurtir = document.querySelectorAll(".btn-curtir");

            botoesCurtir.forEach((botao) => {
                const idSecao = botao.getAttribute("data-id");
                const contadorSpan = botao.querySelector(".contador");
                const estrelaSpan = botao.querySelector(".estrela-icone");

                // Recupera estado salvo (se já curtiu e quantidade)
                let curtiu = localStorage.getItem(`curtiu_${idSecao}`) === "true";
                let totalCurtidas = parseInt(localStorage.getItem(`total_${idSecao}`), 10) || 0;

                // Atualiza interface inicial
                contadorSpan.textContent = totalCurtidas;
                if (curtiu) {
                    botao.classList.add("curtido");
                }

                botao.addEventListener("click", () => {
                    if (!curtiu) {
                        totalCurtidas++;
                        curtiu = true;
                        botao.classList.add("curtido");
                    } else {
                        totalCurtidas = Math.max(0, totalCurtidas - 1);
                        curtiu = false;
                        botao.classList.remove("curtido");
                    }

                    contadorSpan.textContent = totalCurtidas;

                    // Animação na estrela
                    estrelaSpan.classList.remove("animar-estrela");
                    void estrelaSpan.offsetWidth; // força reflow para reiniciar animação
                    estrelaSpan.classList.add("animar-estrela");

                    // Salva no localStorage
                    localStorage.setItem(`curtiu_${idSecao}`, curtiu);
                    localStorage.setItem(`total_${idSecao}`, totalCurtidas);
                });
            });
        });