const form = document.querySelector("form"); 
const mostrarfila = document.getElementById("fila").innerHTML; 
let fila = []; 


function incluirFila() {
    let npac = document.getElementById("pac").value; 

        fila.push(npac); 
        return fila.join('<br>'); 
       
    
}

