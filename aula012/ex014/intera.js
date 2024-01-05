function carregar() {
    let fundo = document.getElementById('fundo')
    let insho = document.querySelector('input#InHora')
    let corBot = document.querySelector('input#env')
    let vinsho = Number(insho.value)
    let env = document.querySelector('input#env')
    let titu = document.querySelector('h1#titu')
    let msg = document.querySelector('div#msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    /*env = msg
    hora = vinsho*/
    msg.innerText = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        fundo.style.background = '#69ddef'
        corBot.style.color = '#69ddef'
        titu.innerText = `Bom Dia!`
        img.src = 'dia.png'
    }
    else if (hora >= 12 && hora < 18) {
        fundo.style.background = '#fec326'
        corBot.style.color = '#fec326'
        titu.innerText = `Boa Tarde!`
        img.src = 'tarde.png'
    }
    else {
        fundo.style.background = '#e585ff'
        corBot.style.color = '#e585ff'
        titu.innerText = `Boa Noite!`
        img.src = 'noite.png'
    }
}