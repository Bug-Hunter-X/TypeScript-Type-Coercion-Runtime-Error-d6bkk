function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(1,2); // Correct
let result2 = addSafe(1,2); //Correct

//let result3 = add(1, "2"); //This will now throw a compile time error with the addSafe function

//Alternatively using type predicates
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function addSafe2(a: any, b: any): number{
    if(!isNumber(a) || !isNumber(b)){
        throw new Error("Both parameters must be numbers");
    }
    return a + b;
}

let result4 = addSafe2(1,2); //Correct