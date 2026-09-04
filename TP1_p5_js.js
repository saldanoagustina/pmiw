let estado_saltar = -1;
let estado_personaje = "CAMINAR";

let fondo;
let posX_fondo = 0;

let posX_caminar = 0;
let posY_saltar = 415;

let caminar_cant = 6;
let saltar_cant = 7;
let acelerar_cant = 4;

let caminar = [];
let saltar = [];
let acelerar = [];

let velocidadAnimacion = 10;
let tiempoEstado = 0;
let escalaSprite = 3;


function preload() {
  precargar();
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(200);

  imageMode(CORNER);
  image(fondo, posX_fondo, -50, 2500, 700);

  imageMode(CENTER);

  tiempoEstado++;
  if (estado_personaje === "CAMINAR") {
    accion_caminar();
  } else if (estado_personaje === "ACELERAR") {
    accion_acelerar();
  } else if (estado_personaje === "SALTAR") {
    accion_saltar();
  }
}
