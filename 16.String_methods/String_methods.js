// if you print any sentence then print variable in console you put + in  console.log("Length" +c);
let first_name = "VenkatJothi";
let last_name = "Raj";

//Concatenation - joining two strings

// Two ways- 
//1.Manual concatenation 
//let c = first_name+last_name;

let c = first_name+" "+last_name;
console.log(c);


//2.concat function
c=first_name.concat(' ',last_name); //mistake i done i put +in last_name
console.log("concat:"+c);

//append

c="Vj "; // note append means "c+" see the output like Vj Pazhani
c+="Pazhani";

console.log("Append :" +c);

//Escaping

//c='She can't run'; if you type like this it gives error
// it can avoid by putting "" like c="She can't run";
// if yo want put this forward slash in single quote you can use this below method

c='She can\'t run';
//putting forward slash in single quote then it run browser console and javascript understand it's a charecter
console.log(c);

//length
c=first_name.length;
console.log("Length " +c);

// it is case sensitive
//toUppercase function
c=first_name.toUpperCase(); //remember ()
console.log("Uppercase " +c);

//toLowercase function

c=first_name.toLowerCase(); //remember ()
console.log("Lowercase " +c);

//indexOf fuction

c=first_name.indexOf('e'); //remember ()
console.log("indexOf e " +c);