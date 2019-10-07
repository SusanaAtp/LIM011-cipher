window.cipher = {

  // Funcion de Codificado
    encode:(string, offset) => {

      let mensajeEncriptado = "";
      let letras = 0;

      for (let i = 0; i < string.length; i++) {

        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
          letras = ((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65); //offset
        }else if (string.charCodeAt(i) >=97 && string.charCodeAt(i) <=122) {
          letras = ((string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97);
        }else if (letras !== 32) {
          mensajeEncriptado += " ";
        }else{
            mensajeEncriptado = string.charCodeAt(i);
          }
            mensajeEncriptado += String.fromCharCode(letras);
    } return mensajeEncriptado; //fin del for
  },// fin del encode

  //decode: (offset, string){
};
