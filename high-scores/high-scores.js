export class HighScores {
  constructor(puntuaciones) {
    this.puntuaciones = puntuaciones;
  }

  get scores() {
    return this.puntuaciones;
  }

  get latest() {
    return this.puntuaciones[this.puntuaciones.length - 1];
  }

  get personalBest() {
    let listaPuntos = [...this.puntuaciones];
    let result = listaPuntos.sort((a, b) => b - a).slice(0, 1);
    return result[0];
  }

  get personalTopThree() {
    let listaPuntos = [...this.puntuaciones];
    let result = listaPuntos.sort((a, b) => b - a).slice(0, 3);
    return result;
  }
}