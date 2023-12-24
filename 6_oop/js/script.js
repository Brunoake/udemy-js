// //  1 - métodos

// const animal = {
//     nome: "BRUno",
//     latir: function(){
//         console.log("au au")
//     }
// };

// console.log(animal.nome);

// animal.latir();

// // aprofundando em objetos

// const pessoa = {

//     nome: "Bruno",

//     getNome: function() {

//         return this.nome;
//     },

//     setNome: function(novonome) {
//         this.nome = novonome;
//     },
// }

// console.log(pessoa.nome)

// console.log(pessoa.getNome())

// pessoa.setNome("macaico")

// console.log(pessoa.getNome());


// // prototype

// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// // Mais sobre prototype

// const  myObject = {
//     a: "b"
// }

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject)===Object.prototype)

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// //  Classes básicas

// const cachorro = {
//     raca: null,
//     Patas: 4,
// }

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "pastor Alemão";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// console.log(pastorAlemao);

// const bulldog = Object.create(cachorro)

// bulldog.raca = "bulldog"

// console.log(bulldog)

// // função construtora

// function criarCachorro(nome, raca) {

//     const cachorro = Object.create({
//     })

//     cachorro.nome = nome,
//     cachorro.raca =raca

//     return cachorro
// }

// const bob = criarCachorro("bob", "vir-lata");

// console.log(bob);

// const jack = criarCachorro("jack", "poodle")

// console.log(jack)

// console.log(Object.getPrototypeOf(jack))

// const natal = {
//     churrasco: null,
//     convidados: 100
// }

// function ceia(comida, pessoas) {
//     const natal = Object.create({})
//     natal.churrasco = comida,
//     natal.convidados = pessoas

//     return natal
// };

// const ceiadenatal = ceia("kit churrasco", 100)

// console.log(ceiadenatal)

// new

// function Cachorro(nome, raca) {


//     this.nome = nome
//     this.raca = raca
// }

// const husky = new Cachorro("uzzzy", "husky")

// console.log(husky);

// // metodos na funçao construtora

// Cachorro.prototype.uivar = function() {
//     console.log("Auuuuuuuu!")
// }

// console.log(Cachorro.prototype);

// husky.uivar();

// // classes ES6

// class CachorroClasse {
//     constructor(nome, raca) {
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new CachorroClasse("jeff", "bug");

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));

// // mais sobre classes

// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos;
//         this.cor = cor
//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
//     }
// }

// const scania = new Caminhao(6, "vermelha")

// console.log(scania)

// scania.descreverCaminhao()

// // Override

// class Humano {
//     constructor(nome, idade){
//         this.nome = nome; 
//         this.idade = idade;
//     }
// }
// const bruno = new Humano("Bruno", 19);

// console.log(bruno);

// Humano.prototype.idade = "não defifinda";

// console.log(bruno.idade);

// console.log(Humano.prototype.idade);

// symbol

class Aviao {
    constructor(marca, turbina){
        this.marca = marca;
        this.turbina = turbina;
    }
}

const asas = Symbol();

Aviao.prototype[asas] = 2;

const boing = new Aviao ("Boing", 10);

console.log(boing)

console.log(boing[asas])

// getter e setter

class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirtitulo() {
        return `Voce esta lendo ${this.titulo}`;
    }

    set adicionartags(tags) {
        const tagsarray = tags.split(", ")
        this.tags = tagsarray
    }
}


const myPost = new Post("algum post", "é um post sobre programação");

console.log(myPost);

console.log(myPost.exibirtitulo)

myPost.adicionartags = "Programação, Java script, js"

console.log(myPost)

// Herança

class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "shark")

console.log(shark)

// instance of

console.log(shark instanceof Lobo)

console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4, "teste") instanceof Mamifero)