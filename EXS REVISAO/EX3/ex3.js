let lista = []; 
function criarLista(){
    let text = document.getElementById('texto').value; 

    lista.push(text); 
    return lista.join('<br>'); 

}