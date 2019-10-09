ingresar.style.display="none";
container2.style.display="none";
container3.style.display="none";
descifrar.style.display="none";
bienvenidos.style.display="block";
encriptar.style.display="none";

// Primer botón
const primerBoton = document.getElementById("btn1");
  primerBoton.addEventListener('click',()=>{
  ingresar.style.display="block";
const inicio = document.getElementById('bienvenidos').style.display="none";
  encriptar.style.display="none";
});

// Segundo botón
const segundoBoton = document.getElementById('btn2');
  segundoBoton.addEventListener('click', ()=>{
let usuario = document.getElementById('persona').value;
// if (usuario == "") {
  // alert("Ingresa tu ID, por favor")
// } else {
  const container2 = document.getElementById('container2').style.display="block";
    encriptar.style.display="block";
    ingresar.style.display = "none";
// }
});

// Vista codificar
const codigo = document.getElementById('codigo');
  codigo.addEventListener('click', ()=>{
    encriptar.style.display="block";
    descifrar.style.display="none";
});

// Vista copiar mensaje
const enviar = document.getElementById('sendMsg');
  enviar.addEventListener('click', ()=>{
  document.getElementById('container3').style.display="block";
  usuario = document.getElementById('persona').value;
  document.getElementById('user').innerHTML = usuario;
  const ofst = document.getElementById('ofstcode').value;
  document.getElementById('ftr').innerHTML = ofst;
});

// Vista descifrar
const descifrado = document.getElementById('descifrado');
  descifrado.addEventListener('click', ()=>{
    encriptar.style.display="none";
    descifrar.style.display="block";
    container3.style.display="none";
});

// Boton salir ambas vistas
const salir= document.getElementById('salir');
  salir.addEventListener('click', ()=>{
    bienvenidos.style.display="block";
    container2.style.display="none";
    descifrar.style.display="none";
    container3.style.display="none";
const reset = document.querySelectorAll('[name="vacio"]');
reset.forEach((element)=> {
  element.value = ""
})
  });

// Funcion codificar mensaje

  const botonCifrar = document.getElementById('code');
    botonCifrar.addEventListener('click', ()=>{
    let codificar = document.getElementById('codetext');
    let n_offset = document.getElementById('ofstcode');
  document.getElementById('codeado').innerHTML = cipher.encode(codificar.value, n_offset.value);
});

const botonDescifrar = document.getElementById('decode');
  botonDescifrar.addEventListener('click', ()=>{
  let decodificar = document.getElementById('decodetext');
  let n_offset2 = document.getElementById('ofstdecode');
document.getElementById('decodeado').innerHTML = cipher.decode(decodificar.value, n_offset2.value);
});
