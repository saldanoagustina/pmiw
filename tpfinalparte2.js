let objJuego;

function setup() {
  createCanvas(800, 400);

  objJuego = new Juego();
}

function draw() {
  objJuego.dibujar();

  if (objJuego.estado === "jugando") {

    if (keyIsDown(RIGHT_ARROW)) {
      objJuego.personaje.moverDerecha();
    }

    if (keyIsDown(LEFT_ARROW)) {
      objJuego.personaje.moverIzquierda();
    }
  }
}

function keyPressed() {

  if (key === " " && objJuego.estado === "jugando") {
    objJuego.personaje.saltar();
  }
}
