console.log(!true);
console.log(!false);
console.log(!!false);
console.log(!!true);
console.log(!1);
console.log(!!1);
console.log(!0);
console.log(!!0);
console.log(!!""); 

let x = 5;
let y = 9;
console.log(x < 10 && x!==5);
console.log(x>9 || x===5);
console.log(!(x===y));

let s=10;
let t ="a"
console.log(t==="b" || s >= 10);

let a=3;
let b=8;
console.log(!(a == "3" || a === b) && !(b !== 8 && a <= b));

let str = "";
let msg = "haha!";
let eBonito = "false";
console.log(!((str || msg) && eBonito));