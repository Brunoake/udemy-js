// Funções

function minhafuncao() {
    console.log("minha primeira função");
}


// retorno de função

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

// escopo de função

let y = 20;

function testandoescopo() {
    let y = 10
    console.log(`y dentro da função é ${y}`);
}

testandoescopo();

y = 300;
console.log(`y fora da função é ${y}`);

// escopo aninhado

let n = 10;

function escopoaninhado() {

    let n = 20

    if(true){
        let n =30;
      
    
    if(true){
        let n =40;
        console.log(n);
    }
        console.log(n);
      
        }
        
            console.log(n);
      
      }
    


escopoaninhado();

console.log(n);