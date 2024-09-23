class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const aluno1 = new Aluno('Gustavo', 8);
const aluno2 = new Aluno('Mariana', 5.5);
const aluno3 = new Aluno('Pedro', 6);
const aluno4 = new Aluno('Ana', 7.5);

const alunos = [aluno1, aluno2, aluno3, aluno4];

const filtrarAlunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

const alunosAprovados = filtrarAlunosAprovados(alunos);

alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome} foi aprovado com nota ${aluno.nota} (Acima da média)`);
});
