function add(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("no go bad types");
    }
    return n1 + n2;
}
var number1 = "789";
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
