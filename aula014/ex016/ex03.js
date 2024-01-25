function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let result = document.querySelector('div#cont')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (i <= 0 || f <= 0 || p <= 0) {
        alert('[ERRO] dados inválidos, verifique os dados inseridos e tente novamente...')
    }
    else {
        alert('[OK] seus dados estão corretos, seu programa começará por favor! precione ENTER ou OK...')
    }

    for (let c = i; c <= f; c += p) {
        result.innerHTML += `${c}`}
    }