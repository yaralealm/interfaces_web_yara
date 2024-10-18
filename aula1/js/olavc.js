const form = document.querySelector("form"); 
const resp = document.getElementById("resposta"); 

form.addEventListener("submit", (e) => {
    const nome = form.nome.value; 
    resp.innerText = `Olá ${nome}`; 
    e.preventDefault(); 
})