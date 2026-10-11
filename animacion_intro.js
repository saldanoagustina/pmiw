function intro() {
   image(portada, 0, 0, width, height);

  if (millis() - ultimoCambio > velocidadCascada) {
  frameCascada++;

  if (frameCascada >= N_FRAMES) {
    frameCascada = 0;
  }

  ultimoCambio = millis();
}
  image(framesCascada[frameCascada], 317, 345, 55, 105);
   if (millis() - tiempoIntro > 4000) {
    pantalla = 19;
  }

}
