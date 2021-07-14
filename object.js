let amigo= {nome: 'Bruno', 
sexo: 'M', 
peso: 70.7,
engordar(p=0){
    
    console.log(`Dados informativos de: ${amigo.nome}.`);
    this.peso += p
}}

amigo.engordar(2)
console.log(amigo)


