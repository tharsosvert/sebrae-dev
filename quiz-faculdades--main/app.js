let aluno = {
    nome: "",
    curso: "",
    turma: "",
    xp: 0,
    pontos: 0,
    acertos: 0,
    sequencia: 0
};

let questaoAtual = 0;
let tempo = 30;
let intervalo;

const questoes = [

    {
        pergunta:
            "Qual é um dos principais macronutrientes da alimentação?",

        alternativas: [
            "Vitamina C",
            "Proteína",
            "Ferro",
            "Cálcio"
        ],

        correta: 1,

        explicacao:
            "Proteínas são macronutrientes importantes para a formação e manutenção dos tecidos."
    },

    {
        pergunta:
            "Qual vitamina é conhecida como vitamina C?",

        alternativas: [
            "Ácido ascórbico",
            "Retinol",
            "Calciferol",
            "Tiamina"
        ],

        correta: 0,

        explicacao:
            "A vitamina C corresponde ao ácido ascórbico."
    },

    {
        pergunta:
            "Qual mineral é importante para a formação dos ossos?",

        alternativas: [
            "Sódio",
            "Cálcio",
            "Cloro",
            "Iodo"
        ],

        correta: 1,

        explicacao:
            "O cálcio é um mineral fundamental para a estrutura e manutenção dos ossos."
    },

    {
        pergunta:
            "Qual macronutriente possui função energética?",

        alternativas: [
            "Carboidrato",
            "Vitamina",
            "Mineral",
            "Água"
        ],

        correta: 0,

        explicacao:
            "Os carboidratos são uma importante fonte de energia para o organismo."
    },

    {
        pergunta:
            "Qual é a principal função da água no organismo?",

        alternativas: [
            "Participar de diversos processos fisiológicos",
            "Substituir proteínas",
            "Produzir vitaminas",
            "Eliminar todos os minerais"
        ],

        correta: 0,

        explicacao:
            "A água participa de diversas funções fisiológicas, incluindo transporte de nutrientes e regulação da temperatura."
    }

];

function mostrarTela(id) {

    document
        .querySelectorAll(".tela")
        .forEach(tela => {
            tela.classList.remove("ativa");
        });

    document
        .getElementById(id)
        .classList.add("ativa");

    if (id === "ranking") {
        atualizarRanking();
    }

}

function cadastrarAluno() {

    const nome =
        document.getElementById("nome").value.trim();

    const curso =
        document.getElementById("curso").value.trim();

    const turma =
        document.getElementById("turma").value.trim();

    if (!nome || !curso || !turma) {

        alert("Preencha todos os campos.");

        return;
    }

    aluno.nome = nome;
    aluno.curso = curso;
    aluno.turma = turma;

    salvarAluno();

    document.getElementById("nomeAluno")
        .textContent = aluno.nome;

    mostrarTela("dashboard");
}

function iniciarQuiz() {

    questaoAtual = 0;

    mostrarTela("quiz");

    carregarQuestao();

}

function carregarQuestao() {

    if (questaoAtual >= questoes.length) {

        finalizarQuiz();

        return;
    }

    const questao =
        questoes[questaoAtual];

    document.getElementById("questaoNumero")
        .textContent =
        `Questão ${questaoAtual + 1}/${questoes.length}`;

    document.getElementById("pergunta")
        .textContent =
        questao.pergunta;

    const container =
        document.getElementById("alternativas");

    container.innerHTML = "";

    document.getElementById("explicacao")
        .style.display = "none";

    questao.alternativas.forEach(
        (alternativa, index) => {

            const button =
                document.createElement("button");

            button.className =
                "alternativa";

            button.textContent =
                `${String.fromCharCode(65 + index)}. ${alternativa}`;

            button.onclick =
                () => responder(index);

            container.appendChild(button);

        }
    );

    iniciarCronometro();

}

function iniciarCronometro() {

    clearInterval(intervalo);

    tempo = 30;

    document.getElementById("tempo")
        .textContent = tempo;

    intervalo = setInterval(() => {

        tempo--;

        document.getElementById("tempo")
            .textContent = tempo;

        if (tempo <= 0) {

            clearInterval(intervalo);

            responder(-1);

        }

    }, 1000);

}

function responder(indice) {

    clearInterval(intervalo);

    const questao =
        questoes[questaoAtual];

    const acertou =
        indice === questao.correta;

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach(button => {
        button.disabled = true;
    });

    const explicacao =
        document.getElementById("explicacao");

    if (acertou) {

        aluno.acertos++;

        aluno.sequencia++;

        const bonus =
            aluno.sequencia >= 3
                ? 50
                : 0;

        aluno.pontos +=
            100 + bonus;

        aluno.xp +=
            100 + bonus;

        explicacao.innerHTML =
            `✅ <strong>Correto!</strong><br>
             +${100 + bonus} pontos<br><br>
             ${questao.explicacao}`;

    } else {

        aluno.sequencia = 0;

        explicacao.innerHTML =
            `❌ <strong>Resposta incorreta.</strong><br><br>
             ${questao.explicacao}`;

    }

    explicacao.style.display = "block";

    salvarAluno();

    setTimeout(() => {

        questaoAtual++;

        carregarQuestao();

    }, 1800);

}

function finalizarQuiz() {

    clearInterval(intervalo);

    salvarAluno();

    alert(
        `Desafio concluído!\n\n` +
        `Pontuação: ${aluno.pontos}\n` +
        `XP: ${aluno.xp}\n` +
        `Acertos: ${aluno.acertos}`
    );

    atualizarDashboard();

    mostrarTela("dashboard");

}

function atualizarDashboard() {

    document.getElementById("xp")
        .textContent = aluno.xp;

    document.getElementById("pontos")
        .textContent = aluno.pontos;

    document.getElementById("acertos")
        .textContent = aluno.acertos;

    document.getElementById("sequencia")
        .textContent = aluno.sequencia;

}

function salvarAluno() {

    localStorage.setItem(
        "desafioAcademicoAluno",
        JSON.stringify(aluno)
    );

}

function carregarAluno() {

    const dados =
        localStorage.getItem(
            "desafioAcademicoAluno"
        );

    if (dados) {

        aluno = JSON.parse(dados);

        document.getElementById("nomeAluno")
            .textContent = aluno.nome;

        atualizarDashboard();

        mostrarTela("dashboard");

    }

}

function atualizarRanking() {

    const ranking =
        JSON.parse(
            localStorage.getItem(
                "desafioAcademicoRanking"
            )
        ) || [];

    const alunos =
        [...ranking];

    if (aluno.nome) {

        const existente =
            alunos.find(
                a => a.nome === aluno.nome
            );

        if (!existente) {

            alunos.push({
                nome: aluno.nome,
                pontos: aluno.pontos,
                curso: aluno.curso,
                turma: aluno.turma
            });

        }

    }

    alunos.sort(
        (a, b) =>
            b.pontos - a.pontos
    );

    const container =
        document.getElementById(
            "listaRanking"
        );

    container.innerHTML = "";

    alunos.forEach((a, index) => {

        const item =
            document.createElement("div");

        item.className =
            "ranking-item";

        item.innerHTML = `
            <strong>
                ${index + 1}º ${a.nome}
            </strong>

            <span>
                ${a.pontos} pontos
            </span>
        `;

        container.appendChild(item);

    });

}

window.onload = carregarAluno;
