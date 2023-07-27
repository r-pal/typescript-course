function combine (n1: number | string, n2: number | string){

let result
    if (typeof n1 === "number" && typeof n2 === "number"){
        result = n1 + n2;
    }
    return result;
}

const combinedAges = combine (30,36);
console.log(combinedAges);

const combinedNames = combine ("Max", "Anna");