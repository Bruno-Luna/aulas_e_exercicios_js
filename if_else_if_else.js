var horaAtual = new Date() 
var hora = horaAtual.getHours() // vai adicionar a hora atual no programa
console.log(`Agora são ${hora} horas.`)
if (hora <= 12){
    console.log('Bom dia!')
} else if(hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}