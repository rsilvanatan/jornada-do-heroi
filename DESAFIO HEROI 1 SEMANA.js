// compras no mercado

console.log("Neste desafio vamos fazer compras no mercado. \nResponda as perguntas usando apenas sim ou nao e \nvamos descobrir como você se sairá neste desafio \n")
const prompt = require('prompt-sync')();


let chave =  prompt('Encontrou a chave para sair de casa? ');
let cartao =  prompt('Encontrou o cartao de credito? ');
let lista =  prompt('Está com a lista de compras? ');
let produtos =  prompt('Encontrou todos os produtos? ');
let pagou =  prompt('O cartão passou?');

let sim = 0

if(chave == "sim"){
    sim ++
}
//espaço vazio

if(cartao == "sim"){
    sim ++
}
// espaço vazio
if(lista == "sim"){
    sim ++
}
//espaço vazio
if(produtos == "sim"){
    sim ++
}
//espaço vazio
if(pagou == "sim"){
    sim ++
}

if(sim == 5){
   console.log(" \n Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.") 
}
else if(sim == 4){
    console.log("\n Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.")
}
else if(sim == 3){
    console.log("\nVocê chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.")
}
else{
    console.log("\n Você falha, mas ainda consegue fugir da situação.")
}
console.log( "\n", sim, "respostas sim ")
