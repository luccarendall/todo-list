  const createTaskButton = document.getElementById('criar-tarefa');

    /* No momento que houver o clique no 'adicionar', a função será ativada */
    createTaskButton.addEventListener('click', function () { 
    const taskName = document.getElementById('texto-tarefa');
    const lista = document.getElementById('lista-tarefas');
    const task = document.createElement('li');
    task.innerText = taskName.value;
    lista.appendChild(task);
    taskName.value = '';
  });