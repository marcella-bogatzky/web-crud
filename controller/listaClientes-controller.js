import { clienteService } from '../service/cliente-service.js'; //IMPORTANDO DE "cliente-service.js"

// GERANDO TEMPLATE
const criaNovaLinha = (nome, email) => { //Como o código abaixo está em linguagem HTML, é necessário usar o `` para que o JS entenda como uma string. Os código ${} estão em JS
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = ` 
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

// PERCORRENDO ÁRVORE DO DOM
const tabela = document.querySelector('[data-tabela]')

// FAZ JUNÇÃO COM LISTA CLIENTES
clienteService.listaClientes()
.then (data => {
    data.forEach(elemento => {
        tabela.appendChild(
            criaNovaLinha(elemento.nome, elemento.email)
        )
    })
})