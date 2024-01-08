// let num1 = 2;

// let num2 = 3;

// let result = num1 * num2;
// console.log(result);

// function cust () {
//     const nome = "Bruno";
//     console.log(nome)
// }

// const nome = "Tadeu";

// cust()

// console.log(nome)

// // Arrow function

// const sum = function (a, b) {
//     return a + b
// }

// const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5));

// console.log(arrowSum(5, 5))

// const greeting = (name) => {
//     if(name) {
//         return `Hello ${name}`
//     } else {
//         return "hello"
//     }
// }

// console.log(greeting("Bruno"))

// const user = {
//     name: "Leo",
//     sayUserName(){
//         setTimeout(function() {
//             console.log(this)
//             console.log(`username: ${this.name}`)
//         }, 1000);
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log(this)
//             console.log(`Username: ${this.name}`)
            
//     })
// }
// };

// // user.sayUserName();
// // user.sayUserNameArrow();

// // Filter

// const arr = [1, 2, 3, 4, 5, 6];

// const highNumber = arr.filter((n) => {
//     if(n >= 3){
//         return n;
//     }
// })

// console.log(highNumber);

// const users = [
//     {name: "Bruno", available: true},
//     {name: "Breno", available: false},
//     {name: "Gustavo", available: true},
//     {name: "Ana Júlia", available: false},
//     {name: "Douglas", available: true},

// ]

// const availableUser = users.filter((user) => user.available)

// console.log(availableUser)

// map
const products = [
    {name: "Camisa", price: 10.99, category: "roupas"},
    {name: "Blusão", price: 120.00, category: "roupas"},
    {name: "Boné", price: 15.99, category: "Chapéus"},
    {name: "Geladeira", price: 3.599, category: "Eletro"},

    
]

products.map((product) => {
    if(product.category === "roupas") {
        product.onSale = true
    }
})

console.log(products)

// Template literals

const userName = "Bruno"
const age = 18

console.log(`O nome do usuário é: ${userName} e sua idade é : ${age} anos`)

// Destructuring
const fruits = ["maçã", "mamão", "uva"]

const [f1, f2, f3] = fruits
console.log(f1, f2, f3)

const productDetails = {
    name: "mouse",
    price: 150,
    category: "Periféricos",
    color: "white"
}

const {name: productName, price, category, color} = productDetails;

console.log(`Nome do produto é: ${productName} seu preço é ${price} sua categoria é ${category} e sua cor é ${color}`)

// spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a3, 7, 8, 9]

console.log(a4)

const carName = {name: "M2"};
const carBrand = {brand: "bmw"};
const otherInfos = {km: 10000, price: 414.900};

const car = {...carName, ...carBrand, ...otherInfos}

console.log(car)

// Classes
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("camisa gola V", 20);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(20));

// Herança
class ProductWithAttributes  extends Product{

    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }
    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color);
        });
    }

}

const hat = new ProductWithAttributes("chapéu", 29.99, ["preto", "branco",  "cinza"])

console.log(hat)