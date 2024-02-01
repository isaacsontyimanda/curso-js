let num = [5 , 4, 3, 2, 1]
num.push(6)
/*num[5] = 6
num.push(7) 
console.log(`O vetor tem ${num.sort()} posições...`)
*/
num.sort()
console.log(`${num}`)
let pos = num.indexOf(6)
if (pos == -1) {
    console.log(`[ERRO] vetor não encontrado, tente outro...`)
}else {
    console.log(`O valor está na posição ${pos}`)
}