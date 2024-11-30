const form = document.querySelector("form"); 
const resposta = document.getElementById("resposta"); 


// form.addEventListener("submit", (e) => {
//     let num1 = parseInt(form.num1.value) ; 
//     let num2 = parseInt(form.num2.value); 

//     let soma = num1 + num2; 

//     resposta.innerText = soma; 

//     e.preventDefault(); 
// }
// )
    



function Somar() {

    let num1 = parseInt(document.getElementById("num1").value); 
    let num2 = parseInt(document.getElementById("num2").value); 

    return num1 + num2;
}


