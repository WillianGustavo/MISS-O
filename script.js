const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-altrnativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".caixa-resultado");

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
 
     let atual =0;
     let perguntaAtual;
     let historiaFinal = "";


     function mostraPergunta(){
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
     }

     function mostraAlternativas(){
        for (const alternativas of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa;
            caixaAlternativa.appendChild(botaoAlternativas);
        }
     }

     
        function respostaSelecionada(opcaoSelecionada) { 
        const afirmacao = opcaoSelecionada.afirmacao;
        atual++
        mostraPergunta();
      }

     mostraPergunta();