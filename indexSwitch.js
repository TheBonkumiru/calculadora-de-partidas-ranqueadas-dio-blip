let playerWins = 0 // saldo de vitórias
let playerLosses = 0 // saldo de derrotas


let playerLevel = rankingCalculator(playerWins, playerLosses)

console.log(`O Herói tem de saldo de ${playerWins} vitórias, e está no nível ${playerLevel}!`)

function rankingCalculator(wins, losses){
    let winrate = wins - losses // calculo
    switch(true){
        case winrate < 10:
            return "Ferro"

            case winrate >= 11 && winrate <= 20:
                return "Bronze"

                case winrate >= 21 && winrate <= 50:
                return "Prata"

                case winrate >= 51 && winrate <= 80:
                return "Ouro"

                case winrate >= 81 && winrate <= 90:
                return "Diamante"

                 case winrate >= 91 && winrate <= 100:
                return "Lendário"

                default:
                    return "Imortal"
    }

    }