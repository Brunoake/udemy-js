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