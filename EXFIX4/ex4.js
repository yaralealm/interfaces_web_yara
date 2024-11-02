const form = document.querySelector("form"); 
const mostrarfila = document.getElementById("fila").innerHTML; 

let fila = []; 
let atend = []; 


function incluirFila() {
    let npac = document.getElementById("pac").value; 

        fila.push(npac);
        return fila.join('<br>'); 
       
    
}

function Prioritario(){
    let npac = document.getElementById("pac").value; 

    fila.unshift(npac); 
    return fila.join('<br>'); 

}

function Atendimento(){
    let npac = document.getElementById("pac").value; 
    
    for(let i of fila){
        if (npac == i){
            atend[0] = npac; 
            fila.shift(npac); 
        }
    }

    return atend.join('<br>'); 
}
