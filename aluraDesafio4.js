const prompt = require('prompt-sync')({ sigint: true })

function numeroAleatorio (a, b){
  return Math.floor(Math.random() * (b - a + 1)) + a
}
var num2 = numeroAleatorio(0, 10)
console.log('Você tem 3 chances para acertar um número entre "0" e "10"')
  for(var num =0; num<3; num++){
  var num1 = prompt('--> ')
      if(num1 == num2){
        console.log('PARABÉNS VOCÊ ACERTOU!')
      break
      }else if(num1 != num2){
        console.log(num+1,'ª  Tentativa ERRADA!')
      }
  }
  console.log("O número correto era: ", num2)   

  