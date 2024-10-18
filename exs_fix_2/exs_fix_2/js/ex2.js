const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    let valor = Number(document.getElementById("valor").value); 
    let duz;
    let cem; 
    let cinq; 
    let vinte; 
    let dez; 
    let cinco; 
    let dois; 
    const resp = document.getElementById("resposta"); 

    if(valor < 2){
        resp.innerText = `QUANTIA INVÁLIDA!`; 
    } else {
        duz = Math.floor(valor / 200); 
        cem = Math.floor((valor % 200) / 100); 
        cinq = Math.floor(((valor % 200) % 100) / 50); 
        vinte = Math.floor((((valor % 200) % 100) % 50) / 20); 
        dez = Math.floor(((((valor % 200) % 100) % 50) % 20) / 10); 
        cinco = Math.floor((((((valor % 200) % 100) % 50) % 20) % 10) / 5);
        dois = Math.floor(((((((valor % 200) % 100) % 50) % 20) % 10) % 5) / 2);

         resp.innerText = `NOTAS:\n 200: ${duz}\n 100: ${cem}\n 50: ${cinq}\n 20: ${vinte}\n 10: ${dez}\n 5: ${cinco}\n 2: ${dois} `; 
    }

    e.preventDefault(); 
})