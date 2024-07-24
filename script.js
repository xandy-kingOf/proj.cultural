const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Oo",
        alternativas: [
          {
            texto: "oo",
            afirmacao: "afirmacao"
          },
          {
            texto:"ooo",
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
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = "";
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click",  () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + "" ;
    atual++;
    mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2040...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
