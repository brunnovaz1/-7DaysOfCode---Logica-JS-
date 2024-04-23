const prompt = require('prompt-sync')({ sigint: true })
var x, y, operacao 
operacao = prompt('Qual operacao matematica voce gostaria de realizar? (+); (-); (x); (/) ou (sair) ')
    if(operacao == 'sair'){
        console.log('Até a próxima!')
    }else if(operacao != '+' && '-' && 'x' && '/' && 'sair'){
        console.log("Resposta Inválida!")      
    }else{
        x = Number(prompt('Qual o 1º valor? '))
        y = Number(prompt('Qual o 2º valor? '))
        console.log('----------------')  
            if(operacao == '+'){
                console.log(`${x} + ${y} = ${x+y}`)
            }else if(operacao == '-'){
                console.log(`${x} - ${y} = ${x-y}`)
            }else if(operacao == 'x'){
                console.log(`${x} x ${y} = ${x*y}`)
            }else if(operacao == '/'){
                console.log(`${x}/${y} = ${x/y}`)
            }
    }