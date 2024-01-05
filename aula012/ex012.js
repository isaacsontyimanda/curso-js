let agora = new Date
let hora = agora.getHours()
console.log(`São ${hora} horas`)
if (hora <= 11) {
    console.log('Bom dia!🌞')
}
else if (hora <= 17) {
    console.log('Boa Tarde!🌝')
}
else if (hora => 18) {
    console.log('Boa Noite!🌛')
}