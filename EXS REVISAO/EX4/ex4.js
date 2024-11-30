
let botao = document.getElementById("bttn"); 

botao.addEventListener("click", () => {
    let valor = parseInt(document.getElementById("num").value); 
    let tabuada = ''; 
    
    for(let i = 0; i<=10; i++){
       let res = `${valor} x ${i} = ${valor * i} <br>`;
        tabuada += res; 
    }

    document.getElementById("tab").innerHTML = tabuada; 
}
); 