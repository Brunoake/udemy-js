// // // array

// // const lista = [1, 2, 3, 4, 5]

// // console.log(lista);


// // const items = ["Bruno", 2, "maçÃ", 4]

// // console.log(items)

// // // propriedades 

// // const number = [5, 4, 4]

// // console.log(number.length)

// // console.log(number["length"])

// // const myname = "Bruno"

// // console.log(myname.length)

// // // métodos

// // const othernumbers = [1, 2, 3]

// // const allnumbers = number.concat(othernumbers)


// // console.log(allnumbers);

// // const txt = "algum texto"

// // console.log(txt.toUpperCase())

// // console.log(typeof txt.toUpperCase)

// // console.log(txt.indexOf("g"))

// // // object literals

// // const person = {
// //     name: "Bruno",
// //     age: 31,
// //     job: "programador"
// // }

// // console.log(person)

// // //  novas propriedades

// // const car = {
// //     engine: 2.0,
// //     brand: "vw",
// //     km: 20000,

// // };

// // console.log(car)

// // car.doors = 4;

// // console.log(car)

// // delete car.km

// // console.log(car)

// // // mais sobre objeto

//  const obj = {
//      a: "teste",
//      b: true,
//  };

//  console.log(obj instanceof Object);

//  const obj2 = {
//      c: []
//  }

//  Object.assign(obj2, obj)

//  console.log(obj2)

// //conhecendo melhor os objetos

// console.log(Object.keys(obj))

// console.log(Object.keys(obj2))

// console.log(Object.entries(obj2))

// const carr = {
//     motor: 2.0,
//     model: "m2",
//     marca: "bmw",
// };

// console.log(carr)

// console.log(Object.keys(carr));

// console.log(Object.entries(carr))

// console.log(typeof carr)


// // mutação

// const a = {
//     name: "Bruno/"
// }
// const b = a

// console.log(a)
// // console.log(b)

// // console.log(a === b);

// // a.age = 18;

// // console.log(b)

// // loop em arrays

// const users = ["Bruno", "Thiago", "Ana", "Guilherme"]

// for(let i = 0; i < users.length; i++){
//     console.log(`listando o usuario ${users[i]}`)
// } 

// // push e pop

// const array = ["a", "b", "c"]

// array.push("d");

// console.log(array);

// console.log(array.length);

// array.pop();

// console.log(array);

// const itemremovido = array.pop()

// console.log(itemremovido);
// console.log(array);

// array.push("z","f", "e");

// console.log(array);

// // shift e unshift

// const letters = ["a", "b", "c"]

// const letter = letters.shift();

// console.log(letter);

// console.log(letters);

// letters.unshift("p", "d", "e");

// letters.unshift("r");

// console.log(letters);

// // indexOf e lastIndexOf

// const mYelements = ["morango", "maçã", "abacate"];

// console.log(mYelements.indexOf("abacate"));

// console.log(mYelements[2]);

// console.log(mYelements[mYelements.indexOf("abacate")])

// console.log(mYelements.lastIndexOf("abacate"));

// console.log(mYelements.indexOf("uva"));

// Slice

// const testeslice = ["a", "b", "c", "s"]

// const subarray = testeslice.slice(2, 4);

// console.log(subarray);

// console.log(testeslice);

// const subarray2 = testeslice.slice(2, 4 + 1)

// console.log(subarray2)

// const subarray3 = testeslice.slice(10, 20)

// console.log(subarray3)

// // const subarray4 = testeslice.slice(2)

// // console.log(subarray4)

// // // foreach

// // const nums = [1, 2, 3, 4, 5, 6]

// // nums.forEach((numero) =>{
// //    console.log(`O número é ${numero}`) 
// // });

// // const posts = [
// //    {title: "Primeiro post", category: "php"},
// //    {title: "segundo post", category: "js"},
// //    {title: "terceiro post", category: "pyton"},
// // ];

// // posts.forEach((post) =>{
// //    console.log(`Exibindo posts ${post.title}, da categoria: ${post.category}`)
// // }) 

// // // includes

// // const brands= ["bmw", "fiat", "vw"]

// // console.log(brands.includes("fiat"))

// // if(brands.includes("bmw")) {
// //    console.log("há carros da bmw");
// // }

// // reverse
 
// const reversetest = [1, 2, 3, 4, 5, 6]

// reversetest.reverse();

// console.log(reversetest);

// // strings: trim

// const trimtest = "  testando /n   "

// console.log(trimtest);

// console.log(trimtest.trim());



// console.log(trimtest.length);

// console.log(trimtest.trim().length);

// // padstart

// const testepadstart = "1"

// const newnumber = testepadstart.padStart(4, "0")

// console.log(testepadstart);

// console.log(newnumber);

// const testePadEnd = newnumber.padEnd(10, "0")

// console.log(testePadEnd)

// const tester = "1"

// const testerStart = tester.padStart(6, "1")

// console.log(testerStart)

// // split

// const frase = "O rato roeu a roupa do rei de roma"

// const arraydafrase = frase.split(" ")

// console.log(arraydafrase)

// // join

// const frasedenovo = arraydafrase.join(" ")

// console.log(frasedenovo)

// const itemparacomprar = ["mouse", "teclado", "monitor", "notebook"]

// const frasedecompra = `preciamos comprar: ${itemparacomprar.join(", ")}.`

// console.log(frasedecompra);

// // repeat

// const palavra = "testando "

// console.log(palavra.repeat(6))

// // rest operator

// const somainfinita = (...args) => {

//     let total = 0
    
//     for(let i = 0; i < args.length; i++) {
//         total += args[i]
//     }
//  return total;
// };

// console.log(somainfinita(1, 2, 3));

// console.log(somainfinita(7, 8, 9));

// // for...of

// const somainfinita2 = (...args) => {

//     let total = 0

//     for(num of args){
//         total += num;
//     }

//     return total;

// };

// console.log(somainfinita2(1, 2, 4));

// console.log(somainfinita2(5, 3, 13, 54, 22, 99, 100, 32, 34));

// Destructuring

const usersdetails = {
    firstName: "Bruno",
    lastName: "Pacheco",
    age: 18,
    job: "dev"
}


const {firstName, lastName, age, job} = usersdetails

console.log(firstName, lastName, age, job);

// Renomear variaveis

const {firstName: primeiroNome} = usersdetails;

console.log(primeiroNome)

// Destructuring em arrays

const mylist = ["Avião", "Submarino", "Barco"] 

const [veiculA, veiculoB, veiculoC] = mylist;

console.log(veiculA, veiculoB, veiculoC);

// json

const myjson = '{"name": "Bruno", "age": 18}';

console.log(myjson);

console.log(typeof myjson);

// json para objeto

const myObject = JSON.parse(myjson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

const badjson = '{"name": "Bruno", "age": 23}'

const mybadobject = JSON.parse(badjson);

myObject.isOpentoWork = true;

console.log(myObject);

const myNewjson = JSON.stringify(myObject)

console.log(myNewjson);

console.log(typeof myNewjson);