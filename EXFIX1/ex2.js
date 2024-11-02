const form = document.querySelector("form"); 
const resp = document.getElementById("resposta"); 

form.addEventListener("submit", (e) => {
    let nome = form.mod.value; 
    let ano = form.ano.value; 
    let ent = form.val.value * 0.4;
    let parc = (form.val.value * 0.6)/12; 

    resp.innerText = `Carro: ${nome}\n Ano: ${ano}\n Entrada: ${ent} reais\n Parcela(em 12x): ${parc} reais\n`; 

    e.preventDefault(); 
}
) 