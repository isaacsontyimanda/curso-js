let valores = [7,6,5,4,3,2,1]
valores.sort()
/*console.log(`${valores}`)
for (let pos=0; pos < valores.length; pos++ ) {
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}
*/
for (let pos in valores) {
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}