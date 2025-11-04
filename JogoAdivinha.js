//Entrada de dados
const obterValor = (id) => document.getElementById(id);
const obterValorChute = () => parseInt(obterValor('chute').value);
const valorNegativo = (valor) => valor < 0;

//Número aleatório
const gerarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;
const numeroAleatorio = gerarNumeroAleatorio();
console.log("Número secreto (para testes):", numeroAleatorio);


//Numero de tentativas
let numeroTentativas = 10;


//função finalizadora de tentativas
function finalizarJogo(vitoria) {
    obterValor("chute").disabled = true;
    const botao = obterValor("btnChutar"); // Assumindo ID do botão é 'btnChutar'
    botao.textContent = vitoria ? "Vitória! (Recarregar)" : "Jogar Novamente";
    botao.removeEventListener("click", tentativas);
    botao.addEventListener("click", () => window.location.reload());
}

//Função principal de tentativas
function tentativas() {

    const chuteAtual = obterValorChute();

    if (isNaN(chuteAtual) || valorNegativo(chuteAtual) || chuteAtual > 100 || chuteAtual < 1) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        obterValor('chute').value = ''; 
        return;
    }

    if (chuteAtual === numeroAleatorio) {
        alert("Você acertou!");
        finalizarJogo(true);
        return
    }

    else {
        numeroTentativas = numeroTentativas - 1;
        dicas(chuteAtual);
        alert("Você errou! Tentativas restantes: " + numeroTentativas);
        obterValor('chute').value = '';
    }

    if (numeroTentativas === 0) {
        alert("Suas tentativas acabaram! O número secreto era: " + numeroAleatorio);
        finalizarJogo(false);
    }

}

//Função dicas
function dicas(valorChutado) {
 
    if (valorChutado < numeroAleatorio) {
        alert("O número secreto é maior!");
    } else if (valorChutado > numeroAleatorio) {
        alert("O número secreto é menor!");
    }
}
