class Juego {
  constructor() {
    this.crearPersonaje();

    this.fragmentos = [];

    this.crearFragmentos();

    this.estado = "jugando";
  }

  crearPersonaje() {
    this.personaje = new Personaje(0, 300);
  }

  crearFragmentos() {
    for (let i = 0; i < 8; i++) {
      this.fragmentos[i] = new Fragmentos(100 + i * 80, 325);
    }
  }

  dibujar() {
    background(127);

    fill(101, 93, 71);
    rect(0, 350, 800, 50);

    for (let i = 0; i < this.fragmentos.length; i++) {
      this.fragmentos[i].dibujar();
    }

    this.personaje.aplicarGravedad();
    this.personaje.dibujar();

    this.detectarFragmentos();

    this.mostrarContador();
  }

  detectarFragmentos() {
    for (let i = 0; i < this.fragmentos.length; i++) {

      if (!this.fragmentos[i].recolectado) {

        if (dist(
          this.personaje.posX + 25,
          this.personaje.posY + 25,
          this.fragmentos[i].posX,
          this.fragmentos[i].posY
        ) < 30) {

          this.fragmentos[i].recolectado = true;
        }
      }
    }
  }

  mostrarContador() {
    let cantidad = 0;

    for (let i = 0; i < this.fragmentos.length; i++) {
      if (this.fragmentos[i].recolectado) {
        cantidad++;
      }
    }

    fill(0);
    textSize(20);
    textAlign(LEFT);
    text("Fragmentos: " + cantidad + " / 8", 20, 30);
  }
}
