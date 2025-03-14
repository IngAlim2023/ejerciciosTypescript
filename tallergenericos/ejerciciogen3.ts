const filtrar = <T extends number> (arr54: T[]) =>{
    let nArr54: T[] = [];  
    arr54.forEach((value: T)=>{
        if(value%2 == 0){
            nArr54.push(value);
        }
    });
    return nArr54 ;
}

const arr09: number[] = [25,3,2,5,8,7,9,4];

console.log(filtrar(arr09));