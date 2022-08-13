const prompt = require('prompt-sync')({ sigint: true })
var resp1, resp2, resp3, resp4, tech, cons = ""

console.log("======================================================")
console.log("-----------------> 7 Days of Code <-------------------")
console.log("======================================================")
console.log("          Que área você deseja seguir?      ")
cons = prompt("(1) Front-End (2) Back-End --> ");

switch (cons) {
     case "1": {
            console.log("---------------------------------")
            console.log("----------  FRONT-END  ----------")
            console.log("---------------------------------")
            console.log(" Prefere aprender React ou Vue?")
            resp1=prompt('--> ')
        if(resp1 == 'react'){
            console.log("O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. Bons Estudos!!!")
            console.log("----------------------------------------------------------------------------------------")
        }else if(resp1 == 'vue'){
            console.log("------------------------------------------------------------------------------")
            console.log("Vue é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.")
            console.log("------------------------------------------------------------------------------")
        }    
        break
    }
    case "2": {
            console.log("-----------------------------")
            console.log("---------  BACK-END  --------")
            console.log("-----------------------------")
            console.log("Prefere aprender C# ou Java? --> ")
            resp2=prompt('--> ')
        if(resp2 == 'c#'){
            console.log("-------------------------------------------------------------------")
            console.log("C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++. Bons Estudos!!!")
            console.log("------------------------------------------------------------------------------")
        }else if(resp2 == 'java'){
            console.log("------------------------------------------------------------------------------")
            console.log("Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling,hoje pertence a empresa Oracle Corporation.")
            console.log("------------------------------------------------------------------------------")
        }    
        break
    }
    default: {
            console.log("Opção inválida!")
        break
    }
} 
console.log("Você fez uma ótima escolha, após o término dessa etapa você prefere continuar se especializando na area escolhida ou ser um Fullstack?")
console.log("Responda: (area) ou (full)")
        resp3 = prompt('-> ')
        if(resp3 == 'area'){
            console.log("Continuar na área te dará inúmeras oportunidades. Boa sorte!")
        }else if(resp3 == 'full'){
            console.log("Para se tornar um Fullstack, será necessario estudar FRONT e BACK-END. ")
        }else if(resp3 == '' || resp3 != 'area' || resp3!='full'){
            console.log("Opção Incorreta")
        }   
    console.log("------------------------------------------------------------------------------")
    console.log('Para finalizarmos, há mais tecnologias que você deseja aprender? (Sim) ou (Nao)')
        resp4 = prompt('--> ')
        if(resp4 == 'sim'){
            for(var lista = 0; lista <= 10000; lista ++){
                console.log("Qual tecnologia?                           (sair: exit)")
                tech = prompt('--> ')
                    if(tech === 'exit'){
                    break
                    }
            }
        }else{
            console.log('Bons Estudos!')
        }
    
