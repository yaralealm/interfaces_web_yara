// Definindo a variável tentativa fora da função para que ela seja persistente
let tentativa = 0;

function palavraAleatoria() {
    const palavras = ['polia', 'terço', 'polen', 'pauta', 'santo', 'conto', 'rolon', 'feito', 'broca', 'jaula']; 
    const senha = palavras[Math.floor(Math.random() * 10)].toUpperCase(); 
    let palavraDigitada = document.getElementById("input").value.toUpperCase();  // Garantir que a palavra seja em maiúsculas

    // Verificar se a palavra digitada tem 5 letras
    if (palavraDigitada.length !== 5) {
        alert("A palavra precisa ter 5 letras!");
        return;
    }

    // Verificar o número de tentativas (limite de 6 tentativas)
    if (tentativa >= 6) {
        alert("Fim de jogo! A palavra era: " + senha);
        return;
    }

    // Seleciona a fileira correspondente à tentativa atual
    const fil = document.getElementsByClassName('fileira')[tentativa];
    const cel = fil.getElementsByClassName('cx');  
    
    // Itera sobre as letras da palavra e adiciona as classes correspondentes
    for (let i = 0; i < 5; i++) {
        cel[i].textContent = palavraDigitada[i]; // Preenche a célula com a letra digitada

        if (palavraDigitada[i] === senha[i]) {
            cel[i].classList.add('correto'); // Cor verde (letra correta e na posição certa)
        } else if (senha.includes(palavraDigitada[i])) {
            cel[i].classList.add('presente'); // Cor amarela (letra está na palavra, mas em posição errada)
        } else {
            cel[i].classList.add('inexistente'); // Cor cinza (letra não existe na palavra)
        }
    }

    // Limpar o campo de entrada para a próxima tentativa
    document.getElementById("input").value = ""; 

    // Incrementa a variável tentativa para avançar para a próxima fileira
    tentativa++;
}
