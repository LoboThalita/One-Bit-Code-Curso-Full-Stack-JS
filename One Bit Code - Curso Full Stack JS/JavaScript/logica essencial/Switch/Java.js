let distanceInLY = prompt("Digite a distância em anos luz")
let chosenOption = prompt("Para qual unidade deseja converter?\n1. Perse (pc)\n2. Unidade Astronômica (AU)\n3. Quilômetros (km)\n\n(Digite o número da opção desejada")
let chosenUnity
let convertedDistance
let Unidy
switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        Unidy = "pc"
        convertedDistance = distanceInLY * 0.306601
        break;
    case "2":
        chosenUnity = "Unidade astronômica"
        Unidy = "AU"
        convertedDistance = distanceInLY * 63241.1
        break;
    case "3":
        chosenUnity = "Quilômetros"
        Unidy = "Km"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10,12)
        break;
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
        break;
}
alert("Distância em Anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance + " " + Unidy)