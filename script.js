const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { 
        anunciado: "Como as celebrações religiosas influenciam as festas agrícolas e como as práticas agrícolas, por sua vez, impactam as tradições religiosas em diferentes culturas?",

        alternativas: [
            { 

           texto:"Muitas festividades religiosas estão associadas às colheitas, como a festa de Ação de Graças nos Estados Unidos, que celebra a abundância da agricultura.",
            afirmacao:"Festas religiosas geralmente não têm relação com práticas agrícolas em sociedades urbanas onde a agricultura não é uma parte central da vida."
             },
             {
                texto:"Algumas tradições agrícolas, como os rituais de plantio e colheita, são moldadas por crenças religiosas e são realizadas para garantir uma boa colheita.",
                afirmacao:"As práticas agrícolas modernas e as técnicas avançadas na agricultura não têm impacto nas tradições e celebrações religiosas associadas à colheita."
                 }
    ]
}
];
 
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++
    mostraPergunta();
}

mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}