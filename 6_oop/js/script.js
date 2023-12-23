//  1 - métodos

const animal = {
    nome: "BRUno",
    latir: function(){
        console.log("au au")
    }
};

console.log(animal.nome);

animal.latir();

// aprofundando em objetos

const pessoa = {

    nome: "Bruno",

    getNome: function() {

        return this.nome;
    },

    setNome: function(novonome) {
        this.nome = novonome;
    },
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome("macaico")

console.log(pessoa.getNome());


// prototype

const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

// Mais sobre prototype

const  myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject)===Object.prototype)

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

//  Classes básicas

const cachorro = {
    raca: null,
    Patas: 4,
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

console.log(pastorAlemao);

const bulldog = Object.create(cachorro)

bulldog.raca = "bulldog"

console.log(bulldog)

// função construtora

function criarCachorro(nome, raca) {

    const cachorro = Object.create({
    })

    cachorro.nome = nome,
    cachorro.raca =raca

    return cachorro
}

const bob = criarCachorro("bob", "vir-lata");

console.log(bob);

const jack = criarCachorro("jack", "poodle")

console.log(jack)

console.log(Object.getPrototypeOf(jack))

const natal = {
    churrasco: null,
    convidados: 100
}

function ceia(comida, pessoas) {
    const natal = Object.create({})
    natal.churrasco = comida,
    natal.convidados = pessoas

    return natal
};

const ceiadenatal = ceia("kit churrasco", 100)

console.log(ceiadenatal)