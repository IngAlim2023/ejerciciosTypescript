class Repositorio <T>{
    public elementos: T[]= [];
    agregar(value:T){
        this.elementos.push(value);
    }
    buscarPorIndice(value: number): T{
        return this.elementos[value];
    }
    eliminarPorIndice(value:number){
        this.elementos.splice(value,1);
    }
}

let element: Repositorio<number> = new Repositorio();

element.agregar(10);
element.agregar(20);
element.agregar(30);
element.agregar(40);
element.agregar(50);

console.log(element.elementos);

console.log(element.buscarPorIndice(2));
console.log(element.buscarPorIndice(0));

element.eliminarPorIndice(0);

console.log(element.elementos);