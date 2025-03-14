interface Transporte{
    capacidad: number;
}
interface Avion extends Transporte{
    capacidad: number;
    altitudMaxima: number;
}

const avion: Avion = {
    capacidad: 150,
    altitudMaxima: 32000
}

console.log(`Capacidad del avión: ${avion.capacidad} personas`);
console.log(`Altitud máxima: ${avion.altitudMaxima} pies`);