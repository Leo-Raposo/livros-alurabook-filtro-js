let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLibrosDaAPI()

async function getBuscarLibrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
}
