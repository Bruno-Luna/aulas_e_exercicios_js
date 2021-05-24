let valores = [8, 9, 7, 6, 4, 2]
valores.sort() // .sort()  vai colocar em ordem crescente os elementos do array


for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}