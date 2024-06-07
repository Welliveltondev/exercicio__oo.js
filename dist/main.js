const alunos = ["Herodes", "Dario", "Nabucodonosor", "Alexandre", "Cleópatra"]


const sobreAlunos = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Fullstack',
        nota: 5
    }
})

const aprovados = sobreAlunos.filter(function(item) {
    return item.nota > 6
})

console.log(sobreAlunos);
console.log(aprovados);

// function Alunos(nome, curso, nota) {
//     this.nome = nome;
//     this.curso = curso;
//     this.nota = nota;
// }

// const Herodes = new Alunos("Herodes", "Frontend", 6);

// console.log(Herodes);