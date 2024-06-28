function buscarImovel() {
    const urlPagina = window.location.href
    const id = urlPagina.split("=")[1]
    const imvDetalhe = bucarImovelPeloid(id)
    atualizarImovel(imvDetalhe)
}

function atualizarImovel(imovel) {
    const imgImv = document.getElementById("img")
    imgImv.setAttribute("src", imovel.url_foto)

    const h2Imv = document.getElementById("titulo")
    h2Imv.textContent = imovel.nome

    const pImv = document.getElementById("local")
    pImv.textContent = `${imovel.cidade} - ${imovel.estado}`

    const adicionais = imovel.adicional
    const ul = document.getElementById("lista-adicional")

    if (adicionais.length == 0) {
        const li = document.createElement("li")
        li.textContent = "sem adicionais no imovel"
        ul.appendChild(li)
    } else {

        for (let i = 0; i < adicionais.length; i++) {

            const adicional = adicionais[i]
            const chave = adicional.chave
            const valor = adicional.valor


            const li = document.createElement("li")
            li.textContent = `${chave}: ${valor}`
            ul.appendChild(li)
        }
    }
}