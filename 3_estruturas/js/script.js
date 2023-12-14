// variaveis

let nome = "bruninho";


console.log(nome);


let num = 1;

let num2= 3;

console.log (num + num2);

// mais sobre variaveis

let a = 3, b = 14, c = 20;

console.log(a * c + b);

// Prompt

//  const age = prompt("qual sua idade");

//  console.log(`Voce tem ${age} anos.`);

// alert

// alert ("Oi mundo")

// const z = 10;

// alert (`Sua idade é ${z}`);
// math

// console.log(Math.max(2, 1, 13, 11));
// console.log(Math.floor(5.14));
// console.log(Math.ceil(5.89));

// console
  
// console.log("teste");

// console.error("erro!");

// console.warn("aviso!");

// if

// const m = 10;

// if(m > 5) {
//     console.log("M é maior que 5")
// }

// const user = "bruno"

// if(user){
//     console.log(`meu nome é ${user}`);
// }

// const nu = 12 * 3;

// if(nu == 14){
//     console.log("nu é maior que 14");
// }

// // else

// const loggedin = false;

// if(loggedin === true){
//     console.log("está autenticado!");
// }else{
//     console.log("não está autenticado")
// }

// const u = 145;

// const v = 123;

// if(u <= v){
//  console.log("u é menor que v")
// } else{
//     console.log("u é maior que v")
// }

// // else if

// if(1 > 2){
//     console.log("teste");
// } else if(2 > 3) {
//     console.log("teste 2");
// } else if(5 > 3) {
//     console.log("agora sim!");
// }

// const username = "bruno";

// const userage = 18;

// if(username === "tiago"){
//     console.log("ola tiago")
// } else if(username != "bruno"){
//     console.log(" ola mascaco")
// } else{
//     console.log("ola Bruno!")
// }

// while

// let p = 0

// while(p < 5){
//     console.log(`repetindo ${p}`);
//     p = p + 1;
// }

// // loop infinito
// // let x = 10

// // while(x>5) {
// //     console.log(`imprimindo ${x}`);
// // }

// // do while

// let o = 10;

// do {
//     console.log(`valor de o ${o}`);
//     o--;
// } while(o > 1);

// for
for(let t = 0; t < 10; t++){
    console.log(`repetindo ${t}`)
}

let r = 10;

for(r; r > 0; r = r - 1){
    console.log(`o r está diminuindo ${r}`);
}

// saida de loop

for (let g = 20; g > 10; g--){
        console.log(`O valor de g é ${g}`);

        if(g === 15) {
            console.log(" o g é igual a 12!");
            break;
        }
    } 

// continue

for(let v = 0; v < 10; v = v + 1) {
    if(v % 2 === 0) {
        console.log("Numero par");
        continue;
    }

    console.log(v)
};

// switch

const job = "asd";
switch(job){
    case "Advogado":
        console.log("voce é uma advogado")
    break
    case "front end":
        console.log("vc é dev front end")
        break
        default:
         console.log("voce não é nd")
    }