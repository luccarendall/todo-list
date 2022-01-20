const createTaskButton = document.getElementById('criar-tarefa');

/* No momento que houver o clique no 'adicionar', a função será ativada */
createTaskButton.addEventListener('click', () => {
  const taskName = document.getElementById('texto-tarefa');
  const listaOrdenada = document.getElementById('lista-tarefas');
  const task = document.createElement('li');
  task.innerText = taskName.value;
  listaOrdenada.appendChild(task);
  taskName.value = '';
});

// Pq não funciona com arrow function?
const listaOrdenada = document.getElementById('lista-tarefas');
function liGrayBackground() {
  // eslint-disable-next-line no-restricted-globals
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaOrdenada.addEventListener('click', liGrayBackground);
