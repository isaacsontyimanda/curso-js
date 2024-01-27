function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let result = document.querySelector('div#result')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    result.innerHTML = 'Contando: <br>'
    if (p <= 0) {
        alert('Passo inválido, considerando passo: 1')
        p = 1
    }
    if (f > i) {
        for (let c = i; c <= f; c += p) {
            result.innerHTML += `\u{1F449} ${c} `
        }
    }
    if (i > f) {
        for (let c = i; c >= f; c -= p) {
            result.innerHTML += `\u{1F449} ${c} `
        }
    }
    result.innerHTML += '\u{1F3C1}'
}