interface Videojuego{
    titulo: string;
    plataforma: string;
}

class Juego implements Videojuego{
    public titulo: string = "CALL OF DUTY";
    public plataforma: string = "Android";
}

const miJuego = new Juego();


console.log(`Título del videojuego: ${miJuego.titulo}`);
console.log(`Plataforma: ${miJuego.plataforma}`);