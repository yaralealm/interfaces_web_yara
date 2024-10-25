const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'];
    const offset = 4;
    const secret = 'LIPPSASVPH';
    let message = null;

    secret.toLowerCase(); 

    for(i=0; i < alfabeto.length; i++){
        let letra_msg = secret[i];

        if(letra_msg == alfabeto[i]){
            message.push(alfabeto[i-offset]); 
        }
    }

    console.log(message); 
