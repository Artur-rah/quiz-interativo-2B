const nomes = ["Arnaldo", "Ruan", "Miguel", "Hellen", "Mayara", "Ana"];

function aleatorio(lista){
    const posicao = Math.floor(Math.random()* lista.length)
    return lista[posicao];
}

const nome = aleatorio(nomes)