//https://youtu.be/1mlOJCmVqRo

let juego;

let imagenInicio;
let fondo;


let personajeQuieto = [];
let personajeCorriendoD = [];
let personajeCorriendoI = [];
let personajeSaltando = [];

let enemigoQuieto = [];
let enemigoCaminandoI = [];
let enemigoCaminandoD = [];

let pantallaPerdedor;
let pantallaGanador;

let imagenFragmento;
let imagenPlataforma1;
let imagenPlataforma2;
let imagenPlataforma3;

let contadorFragmentos = [];

let fondo_parallax = 0;
let ancho_fondo;

let sonidoFragmento;
let sonidoGanar;
let sonidoPerder;
let musica;

let volver;
let botonCreditos;
let botonInst;

let imagenCreditos;
let imagenInst;

function preload() {
  // sonidos
  musica= loadSound("sonido/musica.mp3");
  sonidoFragmento = loadSound("sonido/fragmento.mp3");
  sonidoGanar = loadSound("sonido/ganar.mp3");
  sonidoPerder = loadSound("sonido/perder.mp3");

  imagenInicio = loadImage("assets/inicio.jpg");

  botonJugar= loadImage('assets/jugar1.png');
 
  
  volver = loadImage("assets/botvolver.png");
  botonCreditos = loadImage("assets/botcreditos.png");
  botonInst = loadImage("assets/botinstrucciones.png");

  imagenCreditos = loadImage("assets/creditos.jpg");
  imagenInst = loadImage("assets/instrucciones.jpg");

  for (let i = 1; i <= 4; i++) {
    personajeQuieto[i - 1] = loadImage('assets/quieto-' + i + '.png');
  }

  for (let i = 1; i <= 8; i++) {
    personajeCorriendoD[i - 1] = loadImage('assets/corriendoderecha-' + i + '.png');
  }

  for (let i = 1; i <= 8; i++) {
    personajeCorriendoI[i - 1] = loadImage('assets/corriendoizq-' + i + '.png');
  }

  for (let i = 1; i <= 9; i++) {
    personajeSaltando[i - 1] = loadImage('assets/saltando-' + i + '.png');
  }

  fondo = loadImage('assets/mazmorra.jpg');
  pantallaPerdedor = loadImage('assets/perdedor.jpg');
  pantallaGanador = loadImage('assets/ganador.jpg');

  enemigoQuieto.push(loadImage('assets/enemigo-1.png'));

  for (let i = 10; i <= 14; i++) {
    enemigoQuieto.push(loadImage('assets/enemigo-' + i + '.png'));
  }

  for (let i = 6; i <= 7; i++) {
    enemigoCaminandoI.push(loadImage('assets/enemigo-' + i + '.png'));
  }

  for (let i = 8; i <= 9; i++) {
    enemigoCaminandoD.push(loadImage('assets/enemigo-' + i + '.png'));
  }

  imagenFragmento = loadImage('assets/fragmento.png');
  imagenPlataforma1 = loadImage('assets/plataforma-1.png');
  imagenPlataforma2 = loadImage('assets/plataforma-2.png');
  imagenPlataforma3 = loadImage('assets/plataforma-3.png');

  for (let i = 0; i <= 8; i++) {
    contadorFragmentos.push(loadImage('assets/contador' + i + '.png'));
  }
}

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}

function mousePressed() {
  juego.mousePresionado();
}
