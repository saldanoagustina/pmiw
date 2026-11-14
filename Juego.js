class Juego {

  constructor() {
    this.fragmentos = [];
    this.plataformas = [];
    this.enemigos = [];

    this.personaje = null;
    this.estado = "inicio";
  }

  preload() {
    imagenInicio = loadImage("data/inicio.jpg");

    // SONIDOS
    musica = loadSound("data/musica.mp3");
    sonidoFragmento = loadSound("data/fragmento.mp3");
    sonidoGanar = loadSound("data/ganar.mp3");
    sonidoPerder = loadSound("data/perder.mp3");

    for (let i = 1; i <= 4; i++) {
      personajeQuieto[i - 1] = loadImage("data/quieto-" + i + ".png");
    }

    for (let i = 1; i <= 8; i++) {
      personajeCorriendoD[i - 1] = loadImage("data/corriendoderecha-" + i + ".png");
      personajeCorriendoI[i - 1] = loadImage("data/corriendoizq-" + i + ".png");
    }

    for (let i = 1; i <= 9; i++) {
      personajeSaltando[i - 1] = loadImage("data/saltando-" + i + ".png");
    }

    fondo = loadImage("data/mazmorra.jpg");
    pantallaPerdedor = loadImage("data/perdedor.jpg");
    pantallaGanador = loadImage("data/ganador.jpg");

    enemigoQuieto.push(loadImage("data/enemigo-1.png"));

    for (let i = 10; i <= 14; i++) {
      enemigoQuieto.push(loadImage("data/enemigo-" + i + ".png"));
    }

    for (let i = 6; i <= 7; i++) {
      enemigoCaminandoI.push(loadImage("data/enemigo-" + i + ".png"));
    }

    for (let i = 8; i <= 9; i++) {
      enemigoCaminandoD.push(loadImage("data/enemigo-" + i + ".png"));
    }

    imagenFragmento = loadImage("data/fragmento.png");
    imagenPlataforma1 = loadImage("data/plataforma-1.png");
    imagenPlataforma2 = loadImage("data/plataforma-2.png");
    imagenPlataforma3 = loadImage("data/plataforma-3.png");
  }

  iniciar() {

    // Detiene la música anterior si estaba sonando
    if (musica.isPlaying()) {
      musica.stop();
    }

    this.personaje = new Personaje(0, 300);

    this.fragmentos = [];
    this.agregarFragmentos();

    this.plataformas = [];
    this.agregarPlataformas();

    this.enemigos = [];
    this.agregarEnemigos();

    this.estado = "jugando";

    // Inicia la música de fondo
    musica.setVolume(0.3);
    musica.loop();
  }

  agregarFragmentos() {
    this.fragmentos.push(new Fragmento(100, 310));
    this.fragmentos.push(new Fragmento(190, 220));
    this.fragmentos.push(new Fragmento(290, 180));
    this.fragmentos.push(new Fragmento(390, 300));
    this.fragmentos.push(new Fragmento(490, 220));
    this.fragmentos.push(new Fragmento(590, 180));
    this.fragmentos.push(new Fragmento(680, 300));
    this.fragmentos.push(new Fragmento(760, 220));
  }

  agregarPlataformas() {
    this.plataformas.push(new Plataforma(130, 270, 1));
    this.plataformas.push(new Plataforma(260, 230, 2));
    this.plataformas.push(new Plataforma(410, 270, 1));
    this.plataformas.push(new Plataforma(530, 230, 3));
    this.plataformas.push(new Plataforma(680, 270, 2));
  }

  agregarEnemigos() {
    this.enemigos.push(new Enemigo(230));
    this.enemigos.push(new Enemigo(450));
    this.enemigos.push(new Enemigo(650));
  }

  dibujar() {
    if (this.estado == "inicio") {
      this.dibujarInicio();
    }
    else if (this.estado == "instrucciones") {
      this.dibujarInstrucciones();
    }
    else if (this.estado == "creditos") {
      this.dibujarCreditos();
    }
    else if (this.estado == "jugando") {
      this.dibujarJuego();
    }
    else if (this.estado == "perdiste") {
      image(pantallaPerdedor, 0, 0, width, height);
      this.mostrarReinicio();
    }
    else if (this.estado == "ganaste") {
      image(pantallaGanador, 0, 0, width, height);
      this.mostrarReinicio();
    }
  }

  dibujarInicio() {
    image(imagenInicio, 0, 0, width, height);

    this.boton(320, 190, 160, 45, "JUGAR");
    this.boton(320, 250, 160, 45, "INSTRUCCIONES");
    this.boton(320, 310, 160, 45, "CREDITOS");
  }

  dibujarInstrucciones() {
    background(25, 30, 45);

    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("INSTRUCCIONES", 400, 65);

    textSize(18);
    text("¡Ayuda a Link a recuperar los ocho fragmentos!", 400, 120);
    text("Usa las flechas para moverte.", 400, 165);
    text("Presiona ESPACIO para saltar.", 400, 200);
    text("Evita a los enemigos de la mazmorra.", 400, 235);
    text("Recolecta los 8 fragmentos para ganar.", 400, 270);

    this.boton(320, 325, 160, 45, "VOLVER");
  }

  dibujarCreditos() {
    background(25, 30, 45);

    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("CREDITOS", 400, 80);

    textSize(19);
    text("Juego desarrollado por:", 400, 150);
    text("María Agustina Saldano", 400, 190);

    this.boton(320, 315, 160, 45, "VOLVER");
  }

  boton(x, y, ancho, alto, nombre) {
    fill(180, 130, 40);
    rect(x, y, ancho, alto, 10);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(18);
    text(nombre, x + ancho / 2, y + alto / 2);
  }

  mostrarReinicio() {
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("Presiona R para volver a jugar", 400, 375);
  }

  dibujarJuego() {
    background(0);
    image(fondo, 0, -130, 800, 614);

    this.moverPersonaje();

    this.dibujarPlataformas();
    this.dibujarFragmentos();
    this.dibujarPersonaje();
    this.dibujarEnemigos();

    this.detectarFragmentos();

    // Solo detecta enemigos si todavía está jugando
    if (this.estado == "jugando") {
      this.detectarEnemigos();
    }

    if (this.estado == "jugando") {
      this.mostrarContador();
    }
  }

  moverPersonaje() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.personaje.moverDerecha();
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.personaje.moverIzquierda();
    }
  }

  dibujarPersonaje() {
    this.personaje.aplicarGravedad(this.plataformas);
    this.personaje.dibujar();
  }

  dibujarFragmentos() {
    for (let i = 0; i < this.fragmentos.length; i++) {
      this.fragmentos[i].dibujar();
    }
  }

  dibujarPlataformas() {
    for (let i = 0; i < this.plataformas.length; i++) {
      this.plataformas[i].dibujar();
    }
  }

  dibujarEnemigos() {
    for (let i = 0; i < this.enemigos.length; i++) {
      this.enemigos[i].actualizar();
      this.enemigos[i].dibujar();
    }
  }

  detectarFragmentos() {
    for (let i = 0; i < this.fragmentos.length; i++) {

      if (!this.fragmentos[i].recolectado) {

        if (dist(
          this.personaje.posX + this.personaje.ancho / 2,
          this.personaje.posY + this.personaje.alto / 2,
          this.fragmentos[i].posX,
          this.fragmentos[i].posY
        ) < 50) {

          this.fragmentos[i].recolectado = true;

          // Sonido al recoger un fragmento
          sonidoFragmento.play();
        }
      }
    }

    let cantidad = 0;

    for (let i = 0; i < this.fragmentos.length; i++) {
      if (this.fragmentos[i].recolectado) {
        cantidad++;
      }
    }

    if (cantidad == 8 && this.estado == "jugando") {

      this.estado = "ganaste";

      // Detiene la música y reproduce el sonido de victoria
      musica.stop();
      sonidoGanar.play();
    }
  }

  detectarEnemigos() {
    for (let i = 0; i < this.enemigos.length; i++) {

      let centroLinkX = this.personaje.posX + this.personaje.ancho / 2;
      let centroLinkY = this.personaje.posY + this.personaje.alto / 2;

      let centroEnemigoX = this.enemigos[i].posX + this.enemigos[i].ancho / 2;
      let centroEnemigoY = this.enemigos[i].posY + this.enemigos[i].alto / 2;

      if (dist(
        centroLinkX,
        centroLinkY,
        centroEnemigoX,
        centroEnemigoY
      ) < 30 && this.estado == "jugando") {

        this.estado = "perdiste";

        // Detiene la música y reproduce el sonido de derrota
        musica.stop();
        sonidoPerder.play();
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

    fill(255);
    textSize(20);
    textAlign(LEFT);
    text("Fragmentos: " + cantidad + " / 8", 20, 30);
  }

  teclaPresionada() {
    if ((this.estado == "perdiste" || this.estado == "ganaste") &&
        (key == "r" || key == "R")) {
      this.iniciar();
    }

    if (this.estado == "jugando" && key == " ") {
      this.personaje.saltar();
    }
  }

  mousePresionado() {

    if (this.estado == "inicio") {

      if (mouseX > 320 && mouseX < 480 &&
          mouseY > 190 && mouseY < 235) {
        this.iniciar();
      }

      else if (mouseX > 320 && mouseX < 480 &&
               mouseY > 250 && mouseY < 295) {
        this.estado = "instrucciones";
      }

      else if (mouseX > 320 && mouseX < 480 &&
               mouseY > 310 && mouseY < 355) {
        this.estado = "creditos";
      }
    }

    else if (this.estado == "instrucciones" ||
             this.estado == "creditos") {

      if (mouseX > 320 && mouseX < 480 &&
          mouseY > 315 && mouseY < 360) {
        this.estado = "inicio";
      }
    }
  }

}
