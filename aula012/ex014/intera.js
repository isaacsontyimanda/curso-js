function carregar() {
    let titu = document.querySelector('h1#titu')
    let msg = document.querySelector('div#msg')
    let imag = document.querySelector('img#imagem')
    let data = new Date()
    let hora = data.getHours()
    if (hora <= 11) {
        titu.innerText = `Bom Dia!`
        msg.innerText = `Agora são ${hora} horas.`
        imag.innerHTML = `<img id="imagem" src="img/dia.png" alt="foto do dia">`
    }
    else if (hora <= 17) {
        titu.innerText = `Boa Tarde!`
        msg.innerText = `Agora são ${hora} horas.`
        imag.innerHTML = `<img id="imagem" src="img/tarde.png" alt="foto do dia">`
    }
    else if (hora => 18) {
        titu.innerText = `Boa Noite!`
        msg.innerText = `Agora são ${hora} horas.`
        imag.innerHTML = `<img id="imagem" src="img/noite.png" alt="foto do dia">`
    }
    else {
        msg.innerText = `[ERRO] Infelizmente essa hora que inseriste não existe!`
    }
}