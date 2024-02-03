let num = document.querySelector('input#num')
let lis = document.querySelector('select#flista')
let valores = []
let res = document.querySelector('div#res')

function oNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function enLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        false
    }
}


function adicionar() {
    if (oNumero(num.value) && !enLista(num.value, valores)) {
        res.innerHTML = ''
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lis.appendChild(item)
        num.value = ''
        num.focus()
    }
    else {
        alert('[ERRO] valor inválido ou não encontrado...')
    }
}

function finalizar() {
    if (valores.length == 0) {
        alert('[ERRO] não pode finalizar sem valores, por favor! insira alguns e tente novamente...')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            media = soma / total
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        res.innerHTML += `<p>Ao todo temos ${total} valores.</p>`
        res.innerHTML += `<p>O maior valor listado foi o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor listado foi o ${menor}.</p>`
        res.innerHTML += `<p>A soma total dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média total dos valores é ${media.toFixed(2)}.</p>`
    }
}