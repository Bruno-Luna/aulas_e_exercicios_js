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
            if (idade >= 0 && idade < 11){
            // criança
            img.setAttribute('src', 'foto-8.png')
            img.style.display = "block"

            }else if (idade < 21){
                // adolescente
                img.setAttribute('src', 'https://cdn.12min.com/books/books_background/60606_o-cerebro-adolescente.site_cover.jpg?1576600447')
            }else if (idade < 50 ){
                // adulto
                img.setAttribute('src', 'https://superafarma.com.br/wp-content/uploads/2020/02/autismo-em-adultos-como.jpg')
                img.style.display = "block"
            }else {
                // idoso
                img.setAttribute('src', 'https://i0.wp.com/www.kdcare.com.br/wp-content/uploads/2019/01/Acessibilidade-para-idosos-5-dicas-para-deixar-sua-casa-mais-segura.jpg?fit=2500%2C1667&ssl=1')
                img.style.display = "block"
            }
            
        }else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 11){
                // criança
                img.setAttribute('src', 'p2.png')
    
                }else if (idade < 21){
                    // adolescente
                
                }else if (idade < 50 ){
                    // adulto
    
                }else {
                    // idoso
                }
        }
        text.style.textAlign = 'center'
        text.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}