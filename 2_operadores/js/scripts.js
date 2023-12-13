// number
console.log(typeof 2);
console.log(typeof 19.8);
console.log(typeof -140);
console.log(typeof 34);
// aritmética

console.log(2 + 4);

console.log(10 - 4);

console.log(150 * 12);

console.log(140 / 3); 

console.log(4 + (12 * 5));

// special number

console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * NaN);

console.log(typeof NaN);


// Strings

console.log("um texto")
console.log('dois textos')
console.log(`tres texto`)

// Mais strings

console.log("mais um texto \n so que quebrando linhas")

console.log("mais um texto \t so que com espaçamento")

// Concatenação

console.log("meu " + 'texto' + ` especial`)

// Interpolação

console.log (`a soma de 2 + 2 é: ${2 + 2}`);

// booleanos

console.log(2 * 2  > 3 + 1);

// comparações

console.log(8 > 6);
console.log(9 >= 9);
console.log(12 == 12);
console.log(12 != 12);
console.log(5 === 5);

// identicos

console.log(45 === "45");

console.log(9 !== "9")

// operadores logicos

console.log(true && true)
console.log(true && false)
console.log(5 >= 2 && 2 < 1)
console.log( 5>= 2 || "mateus")
console.log(!12< 13)
console.log(12==12 || "bruno")

// empty values
console.log(typeof null, typeof undefined)
console.log(null === undefined);
console.log(null !== undefined);

// conversão de tipo automatico

console.log("5" * null);
console.log("texte" * "pence");
console.log("10" + 1);