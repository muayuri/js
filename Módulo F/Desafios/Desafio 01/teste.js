let eu = {nome: 'Yuri', 
id: 18, 
sexo: 'M', 
idade(i=0){
    console.log("Você ficou mais velho")
    this.id += i
}}
eu.idade(2)
console.log(`${eu.nome}, tem ${eu.id}`)