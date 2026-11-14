class Fragmentos {
   constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.recolectado = false;
  }

  dibujar() {
    if (!this.recolectado) {
    fill(255, 220, 0);
    triangle( this.posX, this.posY - 12, this.posX - 12, this.posY + 10, this.posX + 12, this.posY + 10);
  }
}
}
