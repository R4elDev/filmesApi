'use script'

async function pesquisarFilme(filme) {
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${filme}` 
    const response = await fetch(url)
    const data = await response.json()
    const dataDesc = data.description
    const fotosEncontradas = []

    dataDesc.forEach(function(acharFoto){
        fotosEncontradas.push(acharFoto['#IMG_POSTER']) // Fazer dessa forma quando precisar 'burlar' um caracter especial
    })

    return fotosEncontradas

}

function criarImagem(link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link
    galeria.appendChild(novaImg)
}



async function carregarFotos(){
    const filme = document.getElementById('filme').value
    const fotos = await pesquisarFilme(filme)

    const galeria = document.getElementById('galeria')
    galeria.replaceChildren('')

    fotos.forEach(criarImagem)
}

document.getElementById('pesquisar').addEventListener('click', carregarFotos)