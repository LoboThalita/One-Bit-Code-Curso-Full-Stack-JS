let name = prompt("Qual o nome da nave?")
let d1 = prompt("Deseja entrar em uma dobra espacial?\n1- Sim\n2- Não")
let i = 0
while (d1 == "1"){
    d1 = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
    i ++
}
alert("A nave " + name + " deu no total: " + i + " dobras")
