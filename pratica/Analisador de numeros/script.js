let addNumber = document.getElementById('digNum');
let lista = document.getElementById('selnum');
let resOp = document.getElementById('res');
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false   
    }
}


function adicionar() {
    if(isNumero(addNumber.value) && !inLista(addNumber.value, valores)){
        valores.push(Number(addNumber.value))
        let item = document.createElement('option')
        item.text = `Valor ${addNumber.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        windows.alert('Valor inválido ou já consta na lista.')

    }
    addNumber.value = ''
    addNumber.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else{
        
        let total = valores.length
        let maiorN = valores[0]
        let menorN = valores[0]
        let soma = 0
        let media = 0

        for (pos in valores){

            soma += valores[pos]

            if (valores[pos] > maiorN)
            maiorN = valores[pos]
            if (valores[pos] < menorN)
            menorN = valores [pos]
        }
        media = soma/total
        
        res.innerHTML = ''
        res.innerHTML += `<p>Foram utilizados ${total} números. </p>`
        res.innerHTML += `<p>O menor número desta lista é: ${menorN}</p>`
        res.innerHTML += `<p>O maior número desta lista é: ${maiorN}</p>`
        res.innerHTML += `<p>A soma de todos os números é: ${soma}</p>`
        res.innerHTML += `<p>A média dos os números é: ${media}</p>`

    }
}

           