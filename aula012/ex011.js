 let idade = 16
 console.log(`Você tem ${idade} anos.`)
 if (idade < 16) {
    console.log(`Você é menor de idade, não podes votar...`)
 }
 else if (idade < 18 || idade > 65) {
    console.log(`O teu voto é opcional.`)
 }
 else {
    (console.log(`O teu voto é obrigatório.`))
 }