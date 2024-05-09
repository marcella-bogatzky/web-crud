import { clienteService } from '../service/cliente-service.js'; //IMPORTANDO DE "cliente-service.js"

// GERANDO TEMPLATE
const criaNovaLinha = (nome, email, id) => { //Como o código abaixo está em linguagem HTML, é necessário usar o `` para que o JS entenda como uma string. Os código ${} estão em JS
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = ` 
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id

    return linhaNovoCliente
}

// PERCORRENDO ÁRVORE DO DOM
const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if(ehBotaoDeletar){
        try {
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

// FAZ JUNÇÃO COM LISTA CLIENTES

const render = async () => {
    try {
        const listaClientes = await clienteService.listaClientes()
    
        listaClientes.forEach(elemento => {
            tabela.appendChild(
                criaNovaLinha(elemento.nome, elemento.email, elemento.id)
            )
        })
    }
    catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
   
}

render()

// Abaixo está o primeiro código que fizemos para a junção com lista de cliente. Para sintetiza-lo, acrecentamos o "async" para indicar que se trata de uma função assíncrona e "await" para indicar onde retomar após esperar o retorno no promise. Dessa forma, pudemos retirar o then
// clienteService.listaClientes()
// .then (data => {
//     data.forEach(elemento => {
//         tabela.appendChild(
//             criaNovaLinha(elemento.nome, elemento.email, elemento.id)
//         )
//     })
// })