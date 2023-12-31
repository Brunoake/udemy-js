// // Movendo se pelo DOM
// console.log(document.body)

// console.log(document.body.childNodes)

// console.log(document.body.childNodes[1])

// console.log(document.body.childNodes[1].childNodes)

// console.log(document.body.childNodes[1].childNodes[1].textContent)

// // Selecionando por tag

 const listItens = document.getElementsByTagName("li")

// console.log(listItens)

// // Selecionando por id

// const title = document.getElementById("title")

// console.log(title)

// // Selecionando por classe
 const products = document.getElementsByClassName("product")

console.log(products)

// // Selecionado por css

// const productsQuery = document.querySelectorAll(".product")

// console.log(productsQuery)

 const maincontainer = document.querySelector("#main-container")

// console.log(maincontainer)

// // Alterando html com insertBefore

// const p = document.createElement("p");

// const header = title.parentElement;

// header.insertBefore(p, title);

// // Alterando HTML com appendChild
// const navLinks = document.querySelector("nav ul")

// const li = document.createElement("li")

// navLinks.appendChild(li)

// // ReplaceChild
// const h2 = document.createElement("h2")
// h2.textContent = "Meu novo titulo"

// header.replaceChild(h2, title);

// const h3 = document.createElement("h3")
// h3.textContent = "meu titulo de apoio"

// header.replaceChild(h3, h2, title);

// // createTextNode
// const myText = document.createTextNode("Agora vamos colocar mais um titulo")

// console.log(myText);

// const h4 = document.createElement("h4")

// h4.appendChild(myText)

// console.log(h4);

//  maincontainer.appendChild(h4)

// // trabalhando com atributos
// const firstLinks = navLinks.querySelector("a")

// console.log(firstLinks)

// firstLinks.setAttribute("href", "https://google.com");

// console.log(firstLinks.getAttribute("href"))

// firstLinks.setAttribute("target", "_blank")

// // altura e largura

// const footer = document.querySelector("footer")

// console.log(footer.offsetWidth);
// console.log(footer.offsetHeight);

// console.log(footer.clientWidth)
// console.log(footer.clientHeight)

// Posição do elemento
const product1 = products[0]

console.log(product1.getBoundingClientRect());

// css com js

maincontainer.style.color = "red";
maincontainer.style.backgroundColor = "blue";
maincontainer.style.margin = "auto";
maincontainer.style.textAlign = "center";

// Alterando estilos de varios elementos
    for(const li of listItens) {
        li.style.backgroundColor = "#333";
       
        li.style.color = "#fff";
        li.style.textAlign = "center";
    }
