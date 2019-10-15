/* eslint-disable no-plusplus */
window.cipher = {

  // Funcion de Codificado
  encode: (string, offset) => {
    let mensajeEncriptado = '';

    for (let i = 0; i < string.length; i++) {
      let letras = 0;

      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        // eslint-disable-next-line radix
        letras = (((string.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65); // offset
        mensajeEncriptado += String.fromCharCode(letras); // Mostrar MAYUSCULAS
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        // eslint-disable-next-line radix
        letras = (((string.charCodeAt(i) - 97 + parseInt(offset)) % 26) + 97); // offset
        mensajeEncriptado += String.fromCharCode(letras); // Mostrar MINUSCULAS
      } else {
        mensajeEncriptado += string.charAt(i);
      }
    }
    return mensajeEncriptado; // fin del for
  }, // fin del encode

  decode: (string, offset) => {
    let mensajeDescifrado = '';

    for (let i = 0; i < string.length; i++) {
      let letras2 = 0;

      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        // eslint-disable-next-line radix
        letras2 = (((string.charCodeAt(i) - 65 - parseInt(offset) + 52) % 26) + 65); // offset
        mensajeDescifrado += String.fromCharCode(letras2); // Mostrar MAYUSCULAS
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        // eslint-disable-next-line radix
        letras2 = (((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97); // offset
        mensajeDescifrado += String.fromCharCode(letras2); // Mostrar MINUSCULAS
      } else {
        mensajeDescifrado += string.charAt(i);
      }
    } return mensajeDescifrado; // fin del for
  }, // fin del decode
}; // fin del window
