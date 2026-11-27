class Plataforma {

  constructor(posX, posY, tipo) {
    this.posX = posX;
    this.posY = posY;

    this.tipo = tipo;


    if (tipo == 1) {
      this.imagen = imagenPlataforma1;
      this.ancho = 100;
      this.alto = 30;
    }

    if (tipo == 2) {
      this.imagen = imagenPlataforma2;
      this.ancho = 150;
      this.alto = 30;
    }

    if (tipo == 3) {
      this.imagen = imagenPlataforma3;
      this.ancho = 200;
      this.alto = 30;
    }
  }

  dibujar() {
    image( this.imagen, this.posX, this.posY, this.ancho,this.alto);
  }
}
