//alert("hi vj");

/*
    In 1996 javascript introduced var keyword
     
    var

    In 2015 E6 (javascript version) introduced let and const keyword
     let
     const

*/
/*console.log("hi vj");
var a=25;
var b=26;
console.log(a+b);
*/
//1.scope

/*if(true)
{
   // var msg="welcome vj";
   // let msg="welcome vj";
    const msg="welcome vj";
   console.log(msg);
}
console.log(msg);
*/
// see the console 
// var act as a global variable and it is used both inside and outside the if statement
// let used only within the statements
// const also used within used only within the statements
//------------------------------------------------------------------------------------------------
//2.Variable Redeclaration
console.clear();

/*var a=25;
console.log(a);
                 // diffrent values can  be assign to same variable by var but it is reassign 
                 by new values which are inserted
var a=34;
console.log(a);


let a=28;
             //different values for same variable cannot reasingned
console.log(a);
let a=38;

const a=23;
            // In const,diffrent vales for same variable cannot reasingned
console.log(a);

const a=45;
*/
//------------------------------------------------------------------------------------------------

//3. value assingment
/*
var a=25;
console.log(a);
var a=45;
console.log(a);

const a=25;
console.log(a);
  a=465;       // constant error
console.log(a);

*/
// constant variable value cannot be reasigned but const object value can be reasign

const student={'name':"Pazhani",'age':12};

console.table(student);
console.log(student.name);

student.name="Vjraj";
console.table(student);
console.log(student.name);

// see the console for the understanding



