

function load(){
    var msg = document.getElementById('hora')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML += `<p>Agora são ${hora} horas. </p>`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg.innerHTML += '<p>Bom dia!!!</p>'
        img.src = './img/img1.png'
        document.body.style.backgroundColor = '#DAA520'
    }else if (hora >= 12 && hora <= 18){
        // Boa tarde!
        msg.innerHTML += '<p>Boa tarde!!!</p>'
        img.src = './img/img2.png'
        document.body.style.backgroundColor = '#FF7F50' 
    } else {
        // boa noite!
        msg.innerHTML += '<p>Boa noite!!!</p>'
        img.src = './img/img3.png'
        document.body.style.backgroundColor = '#4682B4'
    }
    
        
    }




