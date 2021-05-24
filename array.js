let num = [8, 9, 7, 6, 4, 2]
num.push(5)
num.sort()
console.log(num);
console.log(`Nosso vetor tem ${num.length} elementos`);
console.log(`O primeiro elemento do vetor é ${num[0]}`);
let pos = num.indexOf(8); // ele vai fazer a busca se ele existe, caso não exista vai retornar -1.  a busca não se dá na posição do elemento, mas sim no elemento em si.
console.log(`O valor 8 está na posição ${pos}`);