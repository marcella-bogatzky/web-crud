// const listaClientes = () => {
//     const promise = new Promise((resolve, reject) => {

//         const http = new XMLHttpRequest()

//         http.open('GET', 'http://localhost:3000/profile') //Abre a comunicação entre a aplicação e a API
    
//         http.onload = () => { //Onload faz o carregamento. O restante da estrutra traduz o que deve acontecer após o carregamento
//             if(http.status >= 400) {
//                 reject (JSON.parse(http.response))
//             } else {
//                 resolve(JSON.parse(http.response))
//             }
//         }

//         http.send() //Enviar a requisição
//     })
//     console.log(promise);
//     return promise
// }

const listaClientes = () => { //Esse código tem a mesma função do código comentado acima. É uma forma mais organizada e enxuta de escrevê-lo
    return fetch(`http://localhost:3000/profile`) //Método global da interface da fetch API > por padrão, já faz um GET e retorna uma promise
    .then (resposta => {
        if (resposta.ok) { // Esse IF está aqui para fazer um tratamento de erro (retornar o erro para quem esta utilizando a página)
            return resposta.json()
        }
        throw new Error ('Não foi possível listar os clientes')
    })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then (resposta => {
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error ('Não foi possível criar o cliente')
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    .then (resposta => {
        if(!resposta.ok) {
            throw new Error ('Não foi possível remover o cliente')   
        }
    })
}

const detalhaCliente = (id) => {
return fetch(`http://localhost:3000/profile/${id}`)
.then (resposta => {
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error ('Não foi possível detalhar o cliente')
})

}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify ({
        nome: nome,
        email: email
        })
    })
    .then (resposta => {
        if (resposta.ok) { 
            return resposta.json()
        }
        throw new Error ('Não foi possível atualizar o cliente')
    })
}

//EXPORTANDO PARA OUTRAS PASTAS
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

