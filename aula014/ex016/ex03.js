function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let result = document.querySelector('div#cont')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (f <= 0 ) {
        alert('[ERRO] dados inválidos, verifique os dados inseridos e tente novamente...')
    }
    else {
        result.innerHTML = 'Contando: <br>'  
    }
    if (p <= 0) {
        alert('Passo inválido, considerando passo: 1')
        p = 1
    }
    if (f > i) { //Contagem Crescente
        for (let c = i ; c <= f ; c += p ) {
            result.innerHTML += `\u{1F449} ${c} `} 
    }
    if (i > f) { //Contagem Decrescente
        for (let c = i; c >= f; c-= p) {
            result.innerHTML += `\u{1F449} ${c} `
        }
    }
        result.innerHTML += `\u{1F3C1}`
    }