const xs = [5, 3, 6, 1, 2, 4];
let menor = xs[0]; 
for(let i=0; i < xs.length; i++){
    if(xs[i] < menor){
        console.log(i); 
    }
}