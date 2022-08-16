const prompt = require('prompt-sync')({ sigint: true })

var item, lista = ""
var vegetais=[], carnes=[], bebidas=[], congelados=[], laticinios=[], outros=[]  

console.log('------------------      Lista de Compras       ---------------')
for(var rep=0; ; rep++){
  if(lista === 'sair'){
    break
  }
console.log('Adicionar item a qual categoria?')
lista = prompt('(1) Vegetais (2) Carnes (3) Bebidas (4) Congelados (5) Laticínios (6) Outros --> ')
console.log('Finalizar ou retornar ao principal digite "sair"')
console.log('----------------------------------------------------------------')  
switch (lista){
    case "1":{                
      for(var rep1=0; ; rep1++){
        console.log('Qual vegetal deseja adicinionar?')
        item = prompt('--> ')
        vegetais.push(item)
          if(item === 'sair'){
        vegetais.pop()  
          break      
          }
      } 
    }
    continue
    case "2":{
      for(var rep1=0; ; rep1++){
        console.log('Qual carne deseja adionionar?')
        item = prompt('--> ')
        carnes.push(item)
          if(item === 'sair'){
        carnes.pop()
            break      
          }
      } 
    }
    continue
    case "3":{
      for(var rep1=0; ; rep1++){
        console.log('Qual bebida deseja adionionar?')
        item = prompt('--> ')
        bebidas.push(item)
          if(item === 'sair'){
        bebidas.pop()
            break      
          }
      } 
    }
    continue
    case "4":{
      for(var rep1=0; ; rep1++){
        console.log('Qual congelado deseja adionionar?')
        item = prompt('--> ')
        congelados.push(item)
          if(item === 'sair'){
        congelados.pop()
            break      
          }
      } 
    }
    continue
    case "5":{
      for(var rep1=0; ; rep1++){
        console.log('Qual laticinio deseja adionionar?')
        item = prompt('--> ')
        laticinios.push(item)
          if(item === 'sair'){
        laticinios.pop()
            break      
          }
      } 
    }
    continue
    case "6":{
      for(var rep1=0; ; rep1++){
        console.log('O que deseja adionionar?')
        item = prompt('--> ')
        outros.push(item)
          if(item === 'sair'){
        outros.pop()
            break

          }
      } 
    }

  }
}
console.log('Lista de Compras')
console.log('----------------')
console.log (`Vegetais: ${vegetais}`)
console.log (`Carnes: ${carnes}`)
console.log (`Bebidas: ${bebidas}`)
console.log (`Congelados: ${congelados}`)
console.log (`Laticíneos: ${laticinios}`)
console.log (`Outros: ${outros}`)
console.log('----------------------------------------------------------------')