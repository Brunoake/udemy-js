// Movendo se pelo DOM
console.log(document.body)

console.log(document.body.childNodes)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// Selecionando por tag

const listItens = document.getElementsByTagName("li")

console.log(listItens)

// Selecionando por id

const title = document.getElementById("title")

console.log(title)

// Selecionando por classe
const products = document.getElementsByClassName("product")

console.log(products)

// Selecionado por css

const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery)

const maincontainer = document.querySelector("#main-container")

console.log(maincontainer)

// Alterando html com insertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);