let valor; 

function Valor(v){
    valor = v;
    mudardeCor(v); 
}

function mudardeCor(valor) {
    let cor; 
    if(valor == 1){
        cor = "rgb(240, 94, 94)";
    } else if(valor == 2){
        cor = "rgb(36, 178, 235)"; 
    }else{
        cor = "rgb(59, 128, 73)";   
    }

    document.getElementById('paragrafo').style.color = cor;
}