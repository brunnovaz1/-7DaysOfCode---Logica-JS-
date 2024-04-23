const prompt = require('prompt-sync')({ sigint: true })

let item = ""
let categoria
let vegetais=[], carnes=[], bebidas=[], congelados=[], laticinios=[], outros=[]  

console.log('------------------      Lista de Compras       ---------------')
let adicionar = 'sim '
while(adicionar != 'nao'){
  adicionar = prompt('Adicionar item a lista de compras? (sim) ou (nao): ')
  if(adicionar != 'sim' && adicionar != 'nao'){
    console.log('Resposta Invalida')
  }else if(adicionar === 'sim'){
            item = prompt('Qual item deseja adicionar?: ')
            categoria = prompt(`Pertence a qual categoria? (1)vegetais, (2)carnes, (3)bebidas, (4)congelados, (5)laticinios, (6)outros: `)
              if(categoria === '1'){
                vegetais.push(item)
              }else if(categoria === '2'){
                carnes.push(item)
              }else if(categoria === '3'){
                bebidas.push(item)
              }else if(categoria === '4'){
              congelados.push(item)
              }else if(categoria === '5'){
                laticinios.push(item)
              }else if(categoria === '6'){
                outros.push(item)
              }else{
                  console.log('Categoria não cadastrada!')
              }  
  }else{
    break
  }
}
console.log('----------------------------------------------------------------')
if(vegetais.length === 0 && carnes.length === 0 && bebidas.length === 0 && congelados.length === 0 && laticinios.length === 0 && outros.length === 0){
    console.log('-----------   LISTA VAZIA   ---------')
}else{
    console.log('Lista de Compras')
    console.log('----------------')
    console.log (`Vegetais: ${vegetais}\n Carnes: ${carnes}\n Bebidas: ${bebidas}\n Congelados: ${congelados}\n Laticíneos: ${laticinios}\n Outros: ${outros}`)
    console.log('----------------------------------------------------------------')
}