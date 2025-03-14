interface Par <T,U> {
    num: T;
    texto: U;
}

const concatenarValores = (objetoRe: Par<number, string>): string =>{
    return `${objetoRe.num} ${objetoRe.texto}`
}

const obj: Par<number, string> = {
    num: 25,
    texto:'Laurence'
}

console.log(concatenarValores(obj));