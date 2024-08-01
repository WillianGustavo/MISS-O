const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-altrnativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".caixa-resultado");

const perguntas = [
    [
        anunciado: "Na ua opinião
        alternativas [
            "Á pratica....
            "A castração ....
    ]
 },
 {
    anunciado: "qual é a visão...."
    alternativas: [
        "desafiador.",
        "apoiam as medidas"
    ]
    }
    {;
        anunciado:
        alternativas:
     ];

     let atual =0;
     let perguntaAtual;

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

     mostraPergunta();