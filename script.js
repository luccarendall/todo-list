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
const removeFinishedBtn = document.getElementById('remover-finalizados')
function removeFinished() {
    for (let i=0; i<olChild.length; i+=1) {
        if (olChild[i].classList.contains('completed')) {
            olChild[i].remove()
            i-=1
        }
    }
}
removeFinishedBtn.addEventListener('click', removeFinished)

// ----------------------------------------------------------------------
const saveBtn = document.getElementById('salvar-tarefas')
function saveOnLocalStorage() {
    const lista = []
    const classList = []
    for (let i=0; i<olChild.length; i+=1) {
        lista.push(olChild[i].innerText)
        classList.push(olChild[i].className)
    }
    localStorage.setItem('getText', JSON.stringify(lista))
    localStorage.setItem('getClasses', JSON.stringify(classList))
    console.log('saved!')
}
saveBtn.addEventListener('click', saveOnLocalStorage)

// ----------------------------------------------------------------------
function getTheList() {
  if (localStorage.getItem('getText') === null) {
      localStorage.setItem('getText', JSON.stringify([]))
      localStorage.setItem('getClasses', JSON.stringify([]))
  } else {
      const getList = JSON.parse(localStorage.getItem('getText'))
      const getClasses = JSON.parse(localStorage.getItem('getClasses'))
      for (let i=0; i<getList.length; i+=1) {
         const getLi = document.createElement('li')
          listaOrdenada.appendChild(getLi)
          getLi.innerHTML = getList[i]
          getLi.className = getClasses[i]
      }
  }
}