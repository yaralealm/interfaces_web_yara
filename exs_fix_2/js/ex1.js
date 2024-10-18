document.querySelector("form").addEventListener("submit", (e) => {
    let a = document.getElementById("l1").value; 
    let b = document.getElementById("l2").value; 
    let c = document.getElementById("l3").value; 
    let tri;  

    if((a < b+c) || (b < a+c) || (c < a+b)){
        resp = `É um triângulo.\n`; 

        if((a==b) || (b==c) || (a==c) ){
            if((a==b)&&(a==c)){
                tri = `Triângulo EQUILÁTERO`; 
            }else{
                tri = `Triângulo ISÓSCELES`; 
            }
        }else{
            tri = `Triângulo ESCALENO`; 
        }

        document.getElementById("resposta").innerText = `É TRIÂNGULO\n ${tri}`; 


    }else{
        document.getElementById("resposta").innerText = `NÃO É TRIÂNGULO`; 
    }



    e.preventDefault(); 
})