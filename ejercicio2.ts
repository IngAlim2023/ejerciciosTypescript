interface Recargable {
  recargar(cantidadEnergia: number): string;
}
interface Disparable {
  disparar(): string;
}

class PistolaLaser implements Disparable, Recargable {
  public _energia: number = 100;
  
  recargar(cantidadEnergia: number): string {
    const cargaTotal = this._energia + cantidadEnergia;
    if (cargaTotal > 100) return `No se puede cargar agregar tanta carga`;
    if (cargaTotal === 100) {
      this._energia = cargaTotal;
      return `Cargada completamente`;
    }
    if (cargaTotal < 0) return `No se puede recargar con esta energía`;
    
    this._energia = cargaTotal;
    return `La carga es: ${this._energia}`;
  }
  disparar(): string {
    let costoDisparo: number = 5;
    if (this._energia - costoDisparo < 0) `Recarga el arma, energía en 0`
    let restaEnergia = this._energia - costoDisparo;
    this._energia = restaEnergia;
    return `Disparo realizado, energía = ${this._energia}`

  }
}

let ak117 = new PistolaLaser();
console.log(ak117.disparar());
console.log(ak117.disparar());
console.log(ak117.disparar());
console.log(ak117.recargar(5));