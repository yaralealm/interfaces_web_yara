let tentativa = 0; 

function palavraAleatoria(){
    const palavras = ['polia', 'terço', 'polen', 'pauta', 'santo', 'conto', 'rolon', 'feito', 'broca', 'jaula']; 
    const senha = palavras[Math.floor(Math.random() * 10)].toUpperCase(); 
    let palavraDigitada = document.getElementById("input").value.toUpperCase(); 

    if (palavraDigitada.length !== 5) {
        alert("A palavra precisa ter 5 letras!");
        return;
    }

    const fil = document.getElementsByClassName('fileira')[tentativa];
    const cel = fil.getElementsByClassName('cx');  
    
        for(let i = 0; i < 5; i++){
            
            cel[i].textContent = palavraDigitada[i]; 

            if(palavraDigitada[i] === senha[i]){
                cel[i].classList.add('correto'); 

            } else if(senha.includes(palavraDigitada[i])){
                cel[i].classList.add('presente'); 
                
            } else{
            cel[i].classList.add('inexistente'); 
  
            }
        }

        tentativa++; 
        document.getElementById("input").value = ""; 

        if(palavraDigitada === senha){
            alert("ACERTOU!"); 
            palavraAleatoria(); 
        }else if(tentativa >= 6){
            alert("PERDEU! A palavra era" + senha); 
        }
        }

