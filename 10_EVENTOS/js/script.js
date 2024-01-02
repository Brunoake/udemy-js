// Adicionando eventos
const btn = document.querySelector("#mybutton")

btn.addEventListener("click", function() {
console.log("clique aqui")
})

// Removendo eventos
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// Argumento do evento
const  myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// Propagação
const containerBtn = document.querySelector("#btn-container")
const btnInside = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("evento 1")
})

btnInside.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("evento 2")
})

// removendo evento padrao
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault();
    
    console.log("Não alterou a página");
})

//  Eventos de tecla
document.addEventListener("keyup", (e) =>{
    console.log(`Soltou a tecla ${e.key}`);
})

document.addEventListener("keydown", (e) =>{
    console.log(`apertou a tecla ${e.key}`);
})

// Eventos de mouse
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão")
});

mouseEvents.addEventListener("mouseup", () => {
    console.log("soltou o botão")
});

mouseEvents.addEventListener("dblclick", () => {
    console.log("clique duplo")
});

// Movimentos do mouse
 document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo x: ${e.x}`)
//     console.log(`No eixo y: ${e.y}`)
 })

// Evento scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
        console.log("passamos de 200px")
    }
})

// Eventos de focus/blur
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("saiu no input")
}) 

// Evento de carregamento

window.addEventListener("load", () => {
    console.log("A pagina carregou")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});

//  debounce
const debounce = (f, delay) => {

    let timeout

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        },delay);
    };

};

window.addEventListener("mousemove", debounce(() => {
    console.log("executando a cada 400ms")
}, 400)
);