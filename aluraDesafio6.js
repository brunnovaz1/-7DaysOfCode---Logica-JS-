const prompt = require('prompt-sync')({ sigint: true })

let item = "", categoria = '', remover =''
let vegetais=[], carnes=[], bebidas=[], congelados=[], laticinios=[], outros=[]  

console.log('------------------      Lista de Compras       ---------------')
let adicionar = 'sim '
while(adicionar != 'nao'){
  if(vegetais.length === 0 && carnes.length === 0 && bebidas.length === 0 && congelados.length === 0 && laticinios.length === 0 && outros.length === 0){
    adicionar = prompt('Adicionar item a lista de compras? (sim) ou (nao): ')    //pergunta feita com a lista vazia
  }else{
    adicionar = prompt('Adicionar outro item a lista de compras? (sim); (nao) ou (remover): ')  //pergunta feita apos uma inclusao
  }
  while(adicionar != 'sim' && adicionar != 'nao' && adicionar != 'remover'){
    console.log('Resposta Invalida')  
    adicionar = prompt('Adicionar item a lista de compras? (sim); (nao) ou (remover): ') //pergunta feita após resposta errada
  }
    if(adicionar === 'nao'){
    break
  }
    if(adicionar === 'sim'){
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
    }else if (adicionar === 'remover'){
          console.log('Lista de Compras')
          console.log('----------------')  
          console.log (`Vegetais: ${vegetais}\n Carnes: ${carnes}\n Bebidas: ${bebidas}\n Congelados: ${congelados}\n Laticíneos: ${laticinios}\n Outros: ${outros}`) 
            remover = prompt(`Qual item da lista você gostaria de remover? `)
            if(vegetais.indexOf(remover) != -1){
              vegetais.splice(vegetais.indexOf(remover),1)
              console.log(`O item ${remover} foi removido!`)
            }else if(carnes.indexOf(remover) != -1){
              carnes.splice(carnes.indexOf(remover),1)
              console.log(`O item ${remover} foi removido!`)
            }else if(bebidas.indexOf(remover) != -1){
              bebidas.splice(bebidas.indexOf(remover),1)
              console.log(`O item ${remover} foi removido!`)
            }else if(congelados.indexOf(remover) != -1){
              congelados.splice(congelados.indexOf(remover),1)
              console.log(`O item ${remover} foi removido!`)
            }else if(laticinios.indexOf(remover) != -1){
              laticinios.splice(laticinios.indexOf(remover),1)
              console.log(`O item ${remover} foi removido!`)
            }else if(outros.indexOf(remover != -1)){
              outros.splice(outros.indexOf(remover),1)
              console.log(`O item &{remover} foi removido`)
            }else{
              console.log('Item não encontrado!')                        //Porque não esta sendo executado?
            }
        }

    }

    if(vegetais.length === 0 && carnes.length === 0 && bebidas.length === 0 && congelados.length === 0 && laticinios.length === 0 && outros.length === 0){
      console.log('-----------   LISTA VAZIA   ---------')
    }else{
      console.log('Lista de Compras')
      console.log('----------------')
      console.log (`Vegetais: ${vegetais}\n Carnes: ${carnes}\n Bebidas: ${bebidas}\n Congelados: ${congelados}\n Laticíneos: ${laticinios}\n Outros: ${outros}`)
      console.log('----------------------------------------------------------------')
    }    
    