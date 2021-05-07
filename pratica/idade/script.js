var img = document.querySelector('#imagem') // Seleciona a imagem do html
var text = document.querySelector('#detected')

function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //vai apresentar a data do ano em 4 dígitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO! Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade <= 11){
            // criança
            img.setAttribute('src', 'foto-8.png')
            img.style.display = "block"

            }else if (idade >= 12 && idade <= 21){
                // adolescente
                img.setAttribute('src', 'foto-4.png')
                img.style.display = "block"
            }else if (idade >= 22 && idade <= 59 ){
                // adulto
                img.setAttribute('src', 'foto-6.png')
                img.style.display = "block"
            }else {
                // idoso
                img.setAttribute('src', 'foto-3.png')
                img.style.display = "block"
            }
            
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <= 11){
                // criança
                img.setAttribute('src', 'foto-7.png')
                img.style.display = "block"
    
                }else if (idade >= 12 && idade <= 21){
                    // adolescente
                    img.setAttribute('src', 'foto-2.png')
                    img.style.display = "block"
                }else if (idade >= 22 && idade <= 59 ){
                    // adulto
                    img.setAttribute('src', 'foto-5.png')
                    img.style.display = "block"
                }else {
                    // idoso
                    img.setAttribute('src', 'foto-1.png')
                    img.style.display = "block"
                }
        }
        text.style.textAlign = 'center'
        text.innerHTML = `Você é ${genero}, com ${idade} anos.`
    }
}