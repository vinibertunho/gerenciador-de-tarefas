let tarefas = [
  "Estudar JavaScript",
  "Fazer exercícios de matemática",
  "Lavar a louça",
  "Comprar mercado",
  "Ir à academia",
  "Ler um livro",
  "Fazer revisão para o teste",
  "Limpar o quarto",
  "Estudar para concurso",
  "Organizar o computador",
];
// adicionando novas tarefas
console.log(tarefas);

tarefas.push("Estudar Ingles", "Comer Fruta");

console.log(tarefas);

console.table(tarefas);

//removendo a ultima tarefa da lista

let TarefaRemovida = tarefas.pop();

console.log(tarefas);

console.table(tarefas);

//adicionando uma tarefa no inicio
tarefas.unshift("Ir correr");
console.table(tarefas);


// verificando se tem a tarefa na lista

if (tarefas.includes("Ir à academia")) {
  console.log ('existe a tarefa Ir à academia')
}

