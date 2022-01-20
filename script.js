// Função para criar botão de adicionar nova task
const createTaskButton = document.getElementById('criar-tarefa');
createTaskButton.addEventListener('click', () => {
  const taskName = document.getElementById('texto-tarefa');
  const listaOrdenada = document.getElementById('lista-tarefas');
  const task = document.createElement('li');
  task.innerText = taskName.value;
  listaOrdenada.appendChild(task);
  taskName.value = '';
});

// Função para mudar cor do background para cinza (Off: Procurar como usar arrow function aqui)
const listaOrdenada = document.getElementById('lista-tarefas');
function liGrayBackground() {
  // eslint-disable-next-line no-restricted-globals
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaOrdenada.addEventListener('click', liGrayBackground);

// Função para criar botão "Limpar"
const createClearButton = document.getElementById('apaga-tudo');
createClearButton.addEventListener('click', () => {
  listaOrdenada.innerHTML = '';
});

// const createCompleteTaskButton = document.getElementById('remover-finalizados');
// //inserir função de clicar botão remover concluídos.
