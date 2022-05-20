let name = prompt("Qual o nome da espaçonave?")
let c1 = prompt("Qual caracter você deseja substituir?")
let c2 = prompt("Por qual caracter você deseja substituir?")
let newName = ""
for(let i=0 ; i < name.length; i++ ){
    if(name[i]==c1){
        newName += c2
    }else{
        newName += name[i]
    }
}
alert("O novo nome da nave é " + newName)