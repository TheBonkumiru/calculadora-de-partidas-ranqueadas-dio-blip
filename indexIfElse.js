let playerWins = 0 // saldo de vitórias
let playerLosses = 0 // saldo de derrotas


let playerLevel = rankingCalculator(playerWins, playerLosses)

console.log(`O Herói tem um saldo de ${playerWins} vitórias, e está no nível ${playerLevel}`)

function rankingCalculator(wins, losses){
    let winrate = wins - losses // calculo
    if(winrate <= 10){
        return "Ferro"
    }
    else if(winrate >= 11 && winrate <= 20){
        return "Bronze"
    }
     else if(winrate >= 21 && winrate <= 50){
        return "Prata"
    }
     else if(winrate >= 51 && winrate <= 80){
        return "Ouro"
    }
     else if(winrate >= 81 && winrate <= 90){
        return "Diamante"
    }
      else if(winrate >= 91 && winrate <= 100){
        return "Lendário"
    }
      else{
        return "Imortal"
    }
}
