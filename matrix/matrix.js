export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    return this.matrix
      .split("\n")
      .map((r) => r.split(" ").map(Number));
  }

  get columns() {
    const rows = this.rows;
    const columnas = [];
    rows[0].map((_, i) => columnas.push(rows.map((r) => r[i])));
    return columnas;
  }
}
