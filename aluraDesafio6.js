const prompt = require('prompt-sync')({ sigint: true })
let frutas=[]
let laticinios=[]
let doces=[]
let congelados=[]
let comida = ''
let categoria = ''
let remover = ''

let adicionar = 'sim'
while(adicionar != 'nao'){
  if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
  adicionar = prompt('Você deseja adicionar algo a lista de compras? (sim) ou (nao) -> ')
  }else{
  adicionar = prompt('Você deseja adicionar algo a lista de compras? (sim) , (nao) ou (remover) -> ')
  }
while(adicionar != 'sim' && adicionar != 'nao' && adicionar != 'remover'){
  console.log('Resposta inválida!')
  adicionar = prompt('Você deseja adicionar algo a lista de compras? (sim) ou (nao) -> ')
}
if(adicionar === 'nao'){
  break
}
if(adicionar === 'sim'){
comida = prompt('Qual comida você deseja adicionar? -> ')
categoria = prompt('Digite o número da categoria que ela entra: (1)frutas, (2)laticinios, (3)doces, (4)congelados? -> ')
  if(categoria === '1'){
    frutas.push(comida)
  }else if(categoria === '2'){
    laticinios.push(comida)
  }else if(categoria === '3'){
    doces.push(comida)
  }else if(categoria === '4'){
    congelados.push(comida)
  }else{
    console.log('Categoria não encontrada!')
  }
}else if(adicionar === 'remover'){
  if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
    console.log('A lista esta vazia!')
  }else{
    remover = prompt(`Lista de compras:\n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}\n\n Qual item você deseja remover?`)
    if(frutas.indexOf(remover) != -1){
      frutas.splice(frutas.indexOf(remover), 1)
      console.log(`O item ${remover} foi removido com sucesso!`)
    }else if(laticinios.indexOf(remover) != -1){
      laticinios.splice(laticinios.indexOf(remover), 1)
      console.log(`O item ${remover} foi removido com sucesso!`)
    }else if(doces.indexOf(remover) =! -1){
      doces.splice(doces.indexOf(remover), 1)
      console.log(`O item ${remover} foi removido com sucesso!`)
    }else if(congelados.indexOf(remover) != -1){
      congelados.splice(congelados.indexOf(remover), 1)
      console.log(`O item ${remover} foi removido com sucesso!`)
    }else{
      console.log('Item não encontrado na lista')
    }
    }

  }




}

console.log('------------------------------------------')
console.log( `Lista de compras:\n Frutas: ${frutas}\n Laticinios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados} `)
  
