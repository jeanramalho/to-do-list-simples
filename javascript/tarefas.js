let inputNovaTarefa = document.querySelector('#inputNovaTarefa')
let btnAddTarefa = document.querySelector('#btnAddTarefa')
let listaTarefas = document.querySelector('#listaTarefas')
let titulo = document.querySelector('.titulozinho')
let recebeTitulo = prompt('Digite o Nome da lista:')

titulo.addEventListener('click', (e) => {
    
    let recebeTitulo = prompt('Digite o Nome da lista:')
    titulo.innerHTML = `${recebeTitulo}`
    
}) 

function editaTitulo() {

}

titulo.innerHTML = `${recebeTitulo}`




inputNovaTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode == 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            id:gerarId(),
        }
        // adicionar a tarefa ao HTML
        adicionarTarefa(tarefa)
    }
    
})

btnAddTarefa.addEventListener('click', (e) => {
    let tarefa = {
        nome: inputNovaTarefa.value,
        id:'gerarId()'
    }
    // adicionar a tarefa ao HTML
    adicionarTarefa(tarefa)
})

function gerarId() {
    return Math.floor(Math.random() * 3000)
}

function adicionarTarefa(tarefa) {
    let li = criarTagLi(tarefa)
    listaTarefas.appendChild(li)
    inputNovaTarefa.value = ''

}

function criarTagLi(tarefa) {
    let li = document.createElement('li')
    li.id = tarefa.id

    let span = document.createElement('span')
    span.classList.add('textoTarefa')
    span.innerHTML = tarefa.nome

    let div = document.createElement('div')

    let btnExcluir = document.createElement('button')
    btnExcluir.classList.add('btnAcao')
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>'
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')')

    
    div.appendChild(btnExcluir)

    li.appendChild(span)
    li.appendChild(div)

    return li
}



function excluir(idTarefa) {
    let confirmacao = window.confirm("Tem certeza que deseja excluir essa tarefa?")
    if(confirmacao) {
        let li = document.getElementById(''+idTarefa+'')
        if(li) {
            listaTarefas.removeChild(li)
        }
    }
}

