let frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];

let array = []; 

for(let fruta of frutas){
    array.push(fruta.substring(0, 3));
}

for(let i of array){
    console.log(i.toUpperCase()); 
}
