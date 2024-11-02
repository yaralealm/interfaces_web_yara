const form = document.querySelector("form"); 
const resposta = document.getElementById("resp"); 

form.addEventListener("submit", (e) => {
    let filme = form.titulo.value; 
    let hora = Math.floor(form.dur.value / 60); 
    let minutos = form.dur.value % 60;

    resposta.innerText = `O filme ${filme} possui duração de ${hora} hora(s) e ${minutos} minutos(s)`; 

    e.preventDefault(); 
}




)


