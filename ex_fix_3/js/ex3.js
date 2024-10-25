
let vetor = [47, 15, 8, 71, 100, 51]; 

vetor.sort(function(a,b){return a-b}); 

console.log(vetor); 

console.log(`A mediana do vetor é:`, calcularMediana(vetor,vetor.length)); 

function calcularMediana (vet,tam){
  let med; 
  if (tam % 2 == 0) {
    
    med = (vet[tam/2 - 1] + vet[tam/2]) / 2
  }else{
    med = vet[Math.floor(tam/2)]; 
  }
  return med; 
}


