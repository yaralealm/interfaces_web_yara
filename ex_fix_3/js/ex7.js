function contarVogais(palavra){
    let vog = 0; 
    for(i=0; i < palavra.lenght; i++){
        if((i == 'a') || (i == 'e') || (i == 'i') || (i == 'o') || (i == 'u')){
            vog++; 
        }
    }

    return vog; 
}

let qtde = contarVogais('interestelar'); 
console.log(`Vogais: `, qtde); 
