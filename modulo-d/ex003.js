var n1 = 5.5
var n2 = 7
var n3 = 9
var n4 = 6.5
var s = Number((n1 + n2 + n3 + n4) / 4)
console.log(`Sua media foi ${s}, e a media necessaria para passar é 6`)
if (s >= 6) {
    console.log(`Voce esta APROVADO!`)
} else {
    console.log('Voce esta REPROVADO!')
}