function somar (n1, n2){ 
    return n1 + n2

}
console.log(somar (7, 9));

function somar (n1=0, n2=0){  // O '=0' siginifica que se não for atribuido valor para o n, ele vai ter o valor de 0 e assim não causa erros na operação. 
    return n1 + n2

}
console.log(somar (7));