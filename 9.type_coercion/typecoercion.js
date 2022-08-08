// type coercion

let a="25"; //taking into String;
let b=10;  //taking into number;
console.log(a+b); //if we add string and number the console does concadination  and give 2510

// if we convert a variable into number type then console add only number and give 35
 a=Number(a);
 console.log(a+b);