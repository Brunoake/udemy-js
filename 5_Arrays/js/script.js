// // array

// const lista = [1, 2, 3, 4, 5]

// console.log(lista);


// const items = ["Bruno", 2, "maçÃ", 4]

// console.log(items)

// // propriedades 

// const number = [5, 4, 4]

// console.log(number.length)

// console.log(number["length"])

// const myname = "Bruno"

// console.log(myname.length)

// // métodos

// const othernumbers = [1, 2, 3]

// const allnumbers = number.concat(othernumbers)


// console.log(allnumbers);

// const txt = "algum texto"

// console.log(txt.toUpperCase())

// console.log(typeof txt.toUpperCase)

// console.log(txt.indexOf("g"))

// // object literals

// const person = {
//     name: "Bruno",
//     age: 31,
//     job: "programador"
// }

// console.log(person)

// //  novas propriedades

// const car = {
//     engine: 2.0,
//     brand: "vw",
//     km: 20000,

// };

// console.log(car)

// car.doors = 4;

// console.log(car)

// delete car.km

// console.log(car)

// // mais sobre objeto

 const obj = {
     a: "teste",
     b: true,
 };

 console.log(obj instanceof Object);

 const obj2 = {
     c: []
 }

 Object.assign(obj2, obj)

 console.log(obj2)

//conhecendo melhor os objetos

console.log(Object.keys(obj))

console.log(Object.keys(obj2))

console.log(Object.entries(obj2))

const carr = {
    motor: 2.0,
    model: "m2",
    marca: "bmw",
};

console.log(carr)

console.log(Object.keys(carr));

console.log(Object.entries(carr))

console.log(typeof carr)

