function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] ano inválido, verifique seus dados e tente novamente...')
    }
    else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/menino.png')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/homem-jovem.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/homem-adulto.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'img/homem-idoso.png')
            }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/menina.png')
            }
            else if (idade <21) {
                //Jovem
                img.setAttribute('src', 'img/mulher-jovem.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/mulher-adulta.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}