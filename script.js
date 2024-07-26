const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const toggleModeButton = document.getElementById('toggle-mode');

const perguntas = [
    {
        enunciado: "OLAAaA",
        alternativas: [
          {
            texto: "aluraaaa",
            afirmacao: "afirmacao"
          },
          {
            texto:"555555",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "iio",
        alternativas: [
          {
            texto:"io",
            afirmacao: "afirmacao"
          },
          {
            texto:"ioo",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "iioo",
        alternativas: [
          {
            texto:"ioo",
            afirmacao: "afirmacao"
          },
          {
            texto:"iooo",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "iiio",
        alternativas: [
          {
            texto:"iio",
            afirmacao: "afirmacao"
          },
          {
            texto:"iioo",
            afirmacao: "afirmacao"
          } 
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        caixaPerguntas.textContent = "Parabéns, você completou o questionário!";
        caixaAlternativas.innerHTML = "";
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = "";
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto; // Corrigido aqui
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao; // Corrigido aqui
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2040...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        toggleModeButton.textContent = 'Escuro';
    } else {
        toggleModeButton.textContent = 'Claro';
    }
});

mostraPergunta();
