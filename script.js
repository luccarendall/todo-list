const createTaskButton = document.getElementById('criar-tarefa')
const listaOrdenada = document.getElementById('lista-tarefas')
function setTask() {
    const
   getInput = document.getElementById('texto-tarefa')
const newLi = document.createElement('li')
    listaOrdenada.appendChild(newLi)
    newLi.innerText = getInput.value
    getInput.value = ''
}

// ----------------------------------------------------------------------
createTaskButton.addEventListener('click', setTask) 
createTaskButton.addEventListener('click', setTask)

const selectInput = document.getElementById('texto-tarefa')
function submitEnter(event) {
    if (event.key === 'Enter') {
        setTask()
    }
}
selectInput.addEventListener('keyup', submitEnter)

// ----------------------------------------------------------------------
const olChild = listaOrdenada.children
function liGrayBackground(event) {
    for (let i=0;i<olChild.length;i+=1) {
        olChild[i].classList.remove('selected')
    }
    event.target.classList.add('selected')
}

// ----------------------------------------------------------------------
listaOrdenada.addEventListener('click', liGrayBackground)

function checkedTask(event) {
  if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed')
  } else {
      event.target.classList.add('completed')
  }
}
listaOrdenada.addEventListener('dblclick', checkedTask)

// ----------------------------------------------------------------------
const clearBtn = document.getElementById('apaga-tudo')
function clear() {
  listaOrdenada.innerHTML = ''
}
clearBtn.addEventListener('click', clear) 

// ----------------------------------------------------------------------
