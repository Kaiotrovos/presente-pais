
const estrelas = document.getElementById("estrelas");
const botao = document.getElementById("botaoSurpresa");
const carta = document.getElementById("carta");
const galeria = document.getElementById("galeria");

// Cria as estrelas douradas no fundo.
function criarEstrelas() {
    if (!estrelas) return;

    const fragmento = document.createDocumentFragment();

    for (let i = 0; i < 90; i++) {
        const estrela = document.createElement("span");

        estrela.classList.add("estrela");
        estrela.style.left = Math.random() * 100 + "%";
        estrela.style.top = Math.random() * 100 + "%";
        estrela.style.animationDelay = Math.random() * 3 + "s";
        estrela.style.animationDuration =
            2 + Math.random() * 4 + "s";

        fragmento.appendChild(estrela);
    }

    estrelas.appendChild(fragmento);
}

// Revela a carta e a galeria.
function revelarCarta() {
    if (!carta || !botao) return;

    carta.classList.remove("escondida");
    carta.classList.add("visivel");
    carta.setAttribute("aria-hidden", "false");

    if (galeria) {
        galeria.classList.remove("escondida");
        galeria.classList.add("visivel");
        galeria.setAttribute("aria-hidden", "false");
    }

    botao.textContent = "Minha mensagem para vocês ❤️";
    botao.disabled = true;

    carta.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Inicializa o site.
criarEstrelas();

if (botao) {
    botao.addEventListener("click", revelarCarta);
}


const musicaFundo = document.getElementById("musicaFundo");
const botaoMusica = document.getElementById("botaoMusica");

if (musicaFundo && botaoMusica) {
    botaoMusica.addEventListener("click", async () => {
        if (musicaFundo.paused) {
            try {
                await musicaFundo.play();
                botaoMusica.textContent = "⏸ Pausar música";
                botaoMusica.setAttribute("aria-pressed", "true");
            } catch (erro) {
                console.error("Não foi possível tocar a música:", erro);
                alert("Não foi possível tocar a música. Confira se o arquivo audio/musica.mp3 existe e está correto.");
            }
        } else {
            musicaFundo.pause();
            botaoMusica.textContent = "▶ Tocar música";
            botaoMusica.setAttribute("aria-pressed", "false");
        }
    });
}