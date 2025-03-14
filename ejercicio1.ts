interface Pelicula {
  _titulo: string;
  _director: string;
  _anioEstreno?: number;
  mostrarInfo(): void;
}

class Peliculas implements Pelicula {
  public _titulo: string;
  public _director: string;
  public _anioEstreno?: number;
  constructor(titulo: string, director: string, anioEstreno?: number) {
    this._titulo = titulo;
    this._director = director;
    this._anioEstreno = anioEstreno;
  }

  mostrarInfo(): void {
    console.log(
      `titulo: ${this._titulo}, director: ${this._director}, año de estreno: ${
        this._anioEstreno ?? "No disponible"
      }`
    );
  }
}

const recibePeliculas = (peli: Pelicula): string => {
  if (!peli._anioEstreno)
    return `Pelicula con año de estreno faltante, nombre de la pelicula: ${peli._titulo} y director de esta: ${peli._director}`;

  return `nombre de la pelicula: ${peli._titulo} y director de esta:  ${peli._director}`;
};

let peli1: Pelicula = new Peliculas("Evan", "MilDis");
let peli2: Pelicula = new Peliculas(
  "EL ranacer de los vivos",
  "Cris Evans",
  2024
);

console.log(recibePeliculas(peli1));
console.log(recibePeliculas(peli2));

