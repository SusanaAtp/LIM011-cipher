/* eslint-disable no-alert */
/* eslint-disable no-undef */
const ingresar = document.getElementById('ingresar');
const bienvenidos = document.getElementById('bienvenidos');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const encriptar = document.getElementById('encriptar');
const descifrar = document.getElementById('descifrar');
const salir = document.getElementById('salir');
// Primer botón
const primerBoton = document.getElementById('btn1');
primerBoton.addEventListener('click', () => {
  ingresar.classList.remove('ocultar');
  bienvenidos.classList.add('ocultar');
});

// Segundo botón
const segundoBoton = document.getElementById('btn2');
segundoBoton.addEventListener('click', () => {
  const usuario = document.getElementById('persona').value;
  if (usuario === '') {
    alert('Ingresa tu ID, por favor');
  } else {
    container2.classList.remove('ocultar');
    encriptar.classList.remove('ocultar');
    salir.classList.remove('ocultar');
    ingresar.classList.add('ocultar');
  }
});

// Vista codificar
const vistaCodigo = document.getElementById('codigo');
vistaCodigo.addEventListener('click', () => {
  encriptar.classList.remove('ocultar');
  descifrar.classList.add('ocultar');
});

// Vista copiar mensaje
const enviar = document.getElementById('sendMsg');
enviar.addEventListener('click', () => {
  container3.classList.remove('ocultar');
  const usuario = document.getElementById('persona').value;
  document.getElementById('user').innerHTML = usuario;
  const ofst = document.getElementById('ofstcode').value;
  document.getElementById('ftr').innerHTML = ofst;
  const mensaje = document.getElementById('codeado').value;
  document.getElementById('msg').innerHTML = mensaje;
});

// Vista descifrar
const vistaDescifrado = document.getElementById('descifrado');
vistaDescifrado.addEventListener('click', () => {
  encriptar.classList.add('ocultar');
  descifrar.classList.remove('ocultar');
  container3.classList.add('ocultar');
});

// Boton salir ambas vistas
salir.addEventListener('click', () => {
  bienvenidos.classList.remove('ocultar');
  container2.classList.add('ocultar');
  container3.classList.add('ocultar');
  descifrar.classList.add('ocultar');
  const reset = document.querySelectorAll('[name="vacio"]');
  reset.forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    element.value = '';
  });
});

// Funcion codificar mensaje

const botonCifrar = document.getElementById('code');
botonCifrar.addEventListener('click', () => {
  const codificar = document.getElementById('codetext');
  const nOffset = document.getElementById('ofstcode');
  document.getElementById('codeado').value = cipher.encode(codificar.value, nOffset.value);
});

// Funcion descifrar mensaje

const botonDescifrar = document.getElementById('decode');
botonDescifrar.addEventListener('click', () => {
  const decodificar = document.getElementById('decodetext');
  const nOffset2 = document.getElementById('ofstdecode');
  document.getElementById('decodeado').value = cipher.decode(decodificar.value, nOffset2.value);
});
