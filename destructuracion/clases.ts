class Rectangulo{
    constructor(public ancho:number, public alto: number){}
    obtenerDimensiones():{}{
        const {ancho, alto} = this;
        return {ancho, alto}
    }
}

const rectangulo1 = new Rectangulo(25,75);
console.log(rectangulo1.obtenerDimensiones());