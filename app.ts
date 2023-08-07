function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): undefined {
    console.log("Result: " + num);
    return;
}

printResult(add(5, 12));

let combineValues: Function;

// combineValues = add;
combineValues = printResult;

console.log(combineValues(8,8))

