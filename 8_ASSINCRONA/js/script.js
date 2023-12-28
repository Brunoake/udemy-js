// // SetTimeout
// console.log("ainda n executou")

// setTimeout(function(){
//     console.log("requisição assincrona")
// }, 2000)

// console.log("Ainda não executou 2")

// SetInterval

//  console.log("Ainda não executou");

// setInterval(function() {
//     console.log("intervalo assincrona")
// }, 3000);

// console.log("Ainda não executou 2");

// Promises

const promessa = Promise.resolve(57 / 2)

console.log("algum código");

promessa.then(value =>{
    console.log(`A soma é ${value}`);
    return value;
})

.then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`));
console.log("Outro código");

// Falha na promise
Promise.resolve(4 * "asd")
.then((n) =>{
    if(Number.isNaN(n)){
        throw new Error("Valores invalidos");
    }
})
.catch((Error) => console.log(`Um erro ocorreu ${Error}`))

// Rejeitando promises

function checkNumber(n) {
    return new Promise((resolve, reject) => {

        if(n > 10) {
            resolve(`O numero é maior que 10`)
        } else{
            reject(new Error("Número muito baixo"));
        }

    });
}

const a = checkNumber(20);

const b = checkNumber(10);

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu ${err}`));

// resolvendo promises

const p1 = new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve(10)
    },3000)
    
});

const p2 = Promise.resolve(10 + 10);


const p3 = new Promise((resolve, reject)=> {
    if(30 > 10){
        resolve(30)
    } else {
        reject("erro!")
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// async functions

async function somarcomDelay(a, b) {
    return a + b
}

somarcomDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`);
});

console.log("teste async")

// Await

function resolvecomDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resolver a promise");
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log("Chamando a promise, e esperando o resultado")
    const result = await resolvecomDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync();

// generator

function* generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    yield 8;
    yield 9;
    yield 10;
}

const gen = generator()

console.log( gen.next().value);
console.log( gen.next().value);
