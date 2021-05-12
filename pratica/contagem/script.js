function contar(){

    var inpIni = document.getElementById('numinit') 
    var inpFim = document.getElementById('numfim') 
    var inpPas = document.getElementById('numpass')
    var res = document.getElementById('res')

    if ( inpIni.value.length == 0 || inpFim.value.length == 0 || inpPas.value.length == 0){
        window.alert('Impossivel contar')

    } else {
        res.innerHTML = `Contando: <br>`

        var i = Number(inpIni.value)
        var f = Number(inpFim.value)
        var p = Number(inpPas.value)
        if( p <= 0){
             p = 1
        }
        if (i < f){

            // contagem crescente
        for(var c = i; c <= f; c += p){
                    res.innerHTML += ` ${c};`
                }

                // contagem regressiva
        } else {
            for(var c = i; c >= f; c -= p)
                    res.innerHTML += ` ${c};`
        } 
    }
        
}