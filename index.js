let saldoDeVitorias = 0 
let nivel = ""
let vitorias = 80
let derrotas = 10

function calculaSaldo (wins, loses) {
    return saldoDeVitorias = wins - loses
}

function rankeamento(saldo) {
    if (saldo < 10) {
        nivel = "Ferro"
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = "Bronze"
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = "Prata"
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = "Ouro"
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = "Diamante"
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
}

function main() {
    calculaSaldo(vitorias, derrotas)
    rankeamento(saldoDeVitorias)
    console.log(`O Herói tem de saldo de ${calculaSaldo(vitorias, derrotas)} vitórias está no nível ${nivel}`)
}

main()