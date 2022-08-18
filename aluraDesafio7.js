const prompt = require('prompt-sync')({ sigint: true })
var num1, num2, operacao 
operacao = prompt('Qual operacao matematica voce gostaria de realizar? (+); (-); (x); (/) ou (sair) ')
    if(operacao == 'sair'){
        console.log('Até a próxima!')
    }else if(operacao != '+' && '-' && 'x' && '/' && 'sair'){
        console.log("Resposta Invalida")      
    }else{
        num1 = prompt('Qual o 1º valor? ')
        num2 = prompt('Qual o 2º valor? ')
        var x = parseInt(num1)
        var y = parseInt(num2)
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
