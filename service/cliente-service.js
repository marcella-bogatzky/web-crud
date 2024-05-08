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
        return resposta.json()
    })
}

//EXPORTANDO PARA "listaClientes-controller.js"
export const clienteService = {
    listaClientes
}

