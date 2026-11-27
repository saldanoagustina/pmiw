class Enemigo {
  constructor(posX) { // caracteristicas
    this.posX = posX;
    this.posY = 310;

    this.ancho = 55;
    this.alto = 60;

    this.inicioX = posX - random(50, 80);
    this.finX = posX + random(50, 80);

    if (random() < 0.5) {
    this.direccion = -1;
  } else {
    this.direccion = 1;
  }
    this.velocidad = random(0.5, 1.2);

    this.frameActual = 0;
    this.contadorAnimacion = floor(random(0, 20));
    this.velocidadAnimacion = floor(random(8, 14));

    this.pausa = 0;
  }

  actualizar() {

    // si hace pausa para
    if (this.pausa > 0) {
      this.pausa--;
    } else {

      this.posX += this.velocidad * this.direccion;

      // llega al limtie izq
      if (this.posX <= this.inicioX) {
        this.posX = this.inicioX;
        this.direccion = 1;
        this.pausa = 25;
      }

      // llega al limite derehco
      if (this.posX >= this.finX) {
        this.posX = this.finX;
        this.direccion = -1;
        this.pausa = 25;
      }
    }

    // animacion
    this.contadorAnimacion++;

    if (this.contadorAnimacion >= this.velocidadAnimacion) {
      this.contadorAnimacion = 0;
      this.frameActual++;
    }
  }

  dibujar() {

    let imagenes;

    // cuando esta quieto, mira de frente
    if (this.pausa > 0) {
      imagenes = enemigoQuieto;
    } 
    // Caminando hacia la izquierda
    else if (this.direccion == -1) {
      imagenes = enemigoCaminandoI;
    } 
    // Caminando hacia la derecha
    else {
      imagenes = enemigoCaminandoD;
    }

    let imagen = imagenes[this.frameActual % imagenes.length];

    image(imagen, this.posX, this.posY, this.ancho, this.alto);
  }
}
