function carregar() {
    let titu = document.querySelector('h1#titu')
    let msg = document.querySelector('div#msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        titu.innerText = `Bom Dia!`
        img.src = 'dia.png'
    }
    else if (hora >= 12 && hora < 18) {
        titu.innerText = `Boa Tarde!`
        img.src = 'tarde.png'
    }
    else {
        titu.innerText = `Boa Noite!`
        img.src = 'noite.png'
    }
}