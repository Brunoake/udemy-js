// // Funções

// function minhafuncao() {
//     console.log("minha primeira função");
// }


// // retorno de função

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2) {
//     return n1 + n2
// }

// const resultado = soma(a, b);

// console.log(resultado);

// console.log(soma(c, d));

// // escopo de função

// let y = 20;

// function testandoescopo() {
//     let y = 10
//     console.log(`y dentro da função é ${y}`);
// }

// testandoescopo();

// y = 300;
// console.log(`y fora da função é ${y}`);

// // escopo aninhado

// let n = 10;

// function escopoaninhado() {

//     let n = 20

//     if(true){
//         let n =30;
      
    
//     if(true){
//         let n =40;
//         console.log(n);
//     }
//         console.log(n);
      
//         }
        
//             console.log(n);
      
//       }
    


// escopoaninhado();

// console.log(n);

// // arrow function

// const testearrow = () => {
//     console.log("esta é uma arrow function")
// };

// testearrow();


// const parouimpar = (n) => {
//     if(n % 2 === 0) {
//         console.log("par");
//         return
//     }
//     console.log("impar")
// }

// parouimpar(5);

// parouimpar(10);

// const raizquadrada = (x) => {
//     return x * x
// };

// console.log(raizquadrada(4));

//  const raizquadrada2 = (x) => x * x
 
//  console.log(raizquadrada2(5));

//  console.log(raizquadrada2(12));

// //  parametro opcional

// const mutiplicacao = function(m, n){
//     if(n === undefined){
//         return m * 2;
//     } else {
//         return m * n;
//     }
// };

// console.log(mutiplicacao(5));
// console.log(mutiplicacao(2, 4));

// const greeting = (nome) => {
//     if(!nome){
//         console.log("ola");
//         return
//     }

//     console.log(`ola ${nome}`)
// }

// greeting();

// greeting("bruno");

// default 

const customgreeting = (name, greet = "ola") =>{
    return `${greet}, ${name}`;
};

console.log(customgreeting("mateus"));

console.log(customgreeting("joao", "bom dia"));

const repeattext = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text);
    }
}

repeattext ("testando");

repeattext("agora repete 5 vezes", 5);

// closure

function somefunction() {
    let txt = "alguma coisa"

    function display() {
        console.log(txt)
    }

    display()
}

somefunction();

const multi = (n) => {
    return (m) => {
        return n * m;
    };
}

const c1 = multi(5)

const c2 = multi(10)

console.log(c1);

console.log(c2);

console.log(c1(5))

console.log(c2(10))

// recursão

const untilten = (n, m) => {
    if(n < 10) {
        console.log("a função parou de executar")
    } else{
        const x = n - m

        console.log(x)

        untilten(x, m)
    }
}

untilten(100, 7);

function factoria(x) {
    if(x === 0){
        return 1
    }else {
        return x * factoria(x - 1)
    }
}


const num = 6

const result = factoria(num)

console.log(`o factorial do numero ${num} é ${result}`);