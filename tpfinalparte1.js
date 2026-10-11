//https://youtu.be/YIbROt6qnd4

let imagenes = [];
let cantidadEscenas = 18;

let portada;

let framesCascada= [];
let N_FRAMES=5;
let frameCascada= 0;
let ultimoCambio = 0;
let velocidadCascada = 80;


let pantalla=0; //intro

let tiempoIntro;
let textoIntro= "Hace muchísimo tiempo, el mundo vivía en una era de caos. En un pequeño reino de la tierra de Hyrule, se transmitía de generación en generación la leyenda de la Trifuerza, unos triángulos dorados con poderes místico. Un ejército malvado atacó el reino y robó la Trifuerza del Poder. Estaba liderado por Ganon, el poderoso Príncipe de las Tinieblas. Temiendo su gobierno, la princesa Zelda dividió la Trifuerza de la Sabiduría en ocho fragmentos y los escondió por todo el reino antes de ser capturada.  El joven Link debe encontrar los ocho fragmentos para derrotar a Ganon y rescatar a la princesa";
let posTextoIntro;
let velocidadTexto = 0.8;

let textoIntro2 = "Maria Agustina Saldaño";
let textoIntro3 = "María Josefina Prieto";

// audio
let sonidoIntro;
let audioIniciado = false;


function preload() { // cargo los recursos imagenes y sonido. utilizo ciclos for
  // animacion
  portada = loadImage('assets/portada.jpg');

  for (let i = 1; i <= N_FRAMES; i++) {
    framesCascada.push(loadImage('assets/sprite-' + i + '.png'));
  }
  
  // imagenes
  for (let i = 1; i <= cantidadEscenas; i++) {
    imagenes[i] = loadImage('assets/escena-' + i + '.jpg');
  }
  // audio
  sonidoIntro = loadSound("sonido/LOZTheme.wav");

}
function setup() { //algunas variables para la intro
  createCanvas(800, 450);
  tiempoIntro =millis ();
  posTextoIntro = height + 50;
  }
 
function draw() { // que parte se muestra en la pantalla segun el valor de la variable pantalla
   if (pantalla == 0) {
    intro();
  }
  else if (pantalla == 19) {
    textoIntroPantalla();
  }
  else {
    dibujarPantallas();
  }
}

function mousePressed() { // detectar los clics

  if (!audioIniciado) {
    userStartAudio();

    if (sonidoIntro.isLoaded()) {
      sonidoIntro.play();
      audioIniciado = true;
    }
  }

  if (pantalla == 0) {
    intro();
  } else if (pantalla == 19) {
    textoIntroPantalla();
  } else {
    clickPantallas();
  }
}
