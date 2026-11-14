let objJuego;

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

let musica;
let sonidoFragmento;
let sonidoGanar;
let sonidoPerder;

let juego;

function preload() {
  juego = new Juego();
  juego.preload();
  
  musica = loadSound("data/musica.mp3");
  sonidoFragmento = loadSound("data/fragmento.mp3");
  sonidoGanar = loadSound("data/ganar.mp3");
  sonidoPerder = loadSound("data/perder.mp3");
}

function setup() {
  createCanvas(800, 400);
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
