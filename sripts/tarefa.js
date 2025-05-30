// Lista inicial de tarefas
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

// Exibe a lista inicial de tarefas no console
console.log(tarefas);

// Adicionando novas tarefas ao final da lista
tarefas.push("Estudar Ingles", "Comer Fruta");

// Exibe a lista após adicionar novas tarefas
console.log(tarefas);

// Exibe a lista de tarefas em formato de tabela para melhor visualização
console.table(tarefas);

// Removendo a última tarefa da lista e armazenando-a na variável TarefaRemovida
let TarefaRemovida = tarefas.pop();

// Exibe a lista após remover a última tarefa
console.log(tarefas);

// Exibe a lista atualizada em formato de tabela
console.table(tarefas);

// Adicionando uma nova tarefa no início da lista
tarefas.unshift("Ir correr");

// Exibe a lista após adicionar a tarefa no início
console.table(tarefas);

// Verificando se a tarefa "Ir à academia" está na lista de tarefas
if (tarefas.includes("Ir à academia")) {
  console.log('existe a tarefa Ir à academia');
}

// Transformando o array de tarefas em uma única string, separando cada tarefa por vírgula
console.log(`Tarefas como string: ${tarefas.join(', ')}`);


// Extraindo tarefas dos índices 2 ao 4 (índice inicial incluso, índice final exclusivo)
let tarefasExtraidas = tarefas.slice(2, 5);

// Exibe as tarefas extraídas
console.log(tarefasExtraidas);
// Saída esperada: ['Lavar a louça', 'Comprar mercado', 'Ir à academia']