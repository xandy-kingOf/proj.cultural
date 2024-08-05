const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const toggleModeButton = document.getElementById('toggle-mode');

const perguntas = [
    {
        enunciado: "Onde foi criado as Olimpíadas?",
        alternativas: [
          {
            texto: "Atenas",
            afirmacao: "afirmacao"
          },
          {
            texto:"Brasil",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "Que país ganhou a primeira Olimpíada?",
        alternativas: [
          {
            texto:"EUA",
            afirmacao: "afirmacao"
          },
          {
            texto:"COREIA DO NORTE",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "Quantos paises devem participar das Olimpiadas?",
        alternativas: [
          {
            texto:"206",
            afirmacao: "afirmacao"
          },
          {
            texto:"102",
            afirmacao: "afirmacao"
          }
        ]
    },
    {
        enunciado: "QUal o pais sede das Olimpiadas no ano de 2024",
        alternativas: [
          {
            texto:"FRANÇA",
            afirmacao: "afirmacao"
          },
          {
            texto:"ANGOLA",
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
