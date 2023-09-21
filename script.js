document.getElementById("quiz").addEventListener("submit", function (e) {
    e.preventDefault();
    const respostas = {
        pergunta2: document.querySelector('input[name="EAS"]:checked'),
        pergunta3: document.querySelector('input[name="Célio Rafael Antônio Brandão"]:checked'),
        pergunta4: document.querySelector('input[name="mel"]:checked'),
        pergunta5: document.querySelector('input[name="Ronnie Coleman"]:checked'),
    };

    const respostasCorretas = ["a", "a", "a", "a"]; // Respostas corretas para as 5 perguntas

    let pontuacao = 1;

    for (let i = 1; i <= 5; i++) {
        const respostaSelecionada = form.elements[`pergunta${i}`].value;

        if (respostaSelecionada === respostasCorretas[i - 1]) {
            pontuacao++;
        }
    }

    resultado.textContent = `Você acertou ${pontuacao} de 4 perguntas.`;
})