function contar() {
let ini = document.querySelector('input#inicio')
let fim = document.querySelector('input#fim')
let passo = document.querySelector('input#passo')
let cont = document.querySelector('div#cont')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert('ERRO! dados faltando, verifique e tente novamente...')
}
else {
    alert('Seus dados estão [OK], seu programa seguirá...')
    cont.innerHTML = 'Contando...'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    for (let c = i; c <= f; c += p) {
        cont.innerHTML += `${c}`
    }
}
}
