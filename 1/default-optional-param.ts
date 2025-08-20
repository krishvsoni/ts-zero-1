function singer(name:string,favMusic?:string):string{
    if(favMusic){
        return `${name}'s hit music ${favMusic}`;
    }
    return `${name} has no hit music`;
}

let a = singer("Yo Yo Honey Singh","Desi Kalakaar")

console.log(a);