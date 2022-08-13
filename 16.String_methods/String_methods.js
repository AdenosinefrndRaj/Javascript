//we add any statement in console then we put '+C'
//ASCII (American Standard Code for Information Interchange) 
//is the most common character encoding format for text data in computers and on the internet. 

// if you print any sentence then print variable in console you put + in  console.log("Length" +c);
let first_name = "VenkatVJothi";
let last_name = "Raj";

//Concatenation - joining two strings

// Two ways- 
//1.Manual concatenation 
//let c = first_name+last_name;

let c = first_name+" "
//2.concat function
c=first_name.concat(' ',last_name); //mistake i done i put +in last_name
console.log("concat:"+c);

//append

c="Vj "; // note append means "c+" see the output like Vj Pazhani
c+="Pazhani";

console.log("Append :" +c);

//2.concat function
c=first_name.concat(' ',last_name); //mistake i done i put +in last_name
console.log("concat:"+c);

//append

console.log("split :"+c);
c="Vj "; // note append means "c+" see the output like Vj Pazhani
c+="Pazhani";

console.log("Append :" +c);


c="Vj "; // note append means "c+" see the output like Vj Pazhani
c+="Pazhani";

console.log("split :"+c);
console.log("Append :" +c);

//Escaping

//c='She can't run'; if you type like this it gives error
// it can avoid by putting "" like c="She can't run";
// if yo want put this forward slash in single quote you can use this below method

c='She can\'t run';
//putting forward slash in single quote then it run browser console and javascript understand it's a charecter
console.log(c);console.log("split :"+c);

// it is case sensitive
//toUppercase function
c=first_name.toUpperCase(); //remember ()
console.log("Uppercase " +c);

//toLowercase function

c=first_name.toLowerCase(); //remember ()
console.log("Lowercase " +c);

//indexOf fuction

c=first_name.indexOf('V'); //remember ()
console.log("indexOf V : " +c);


c=first_name.lastIndexOf('V');
console.log("LastindexOf e : " +c);

//charAt fuction

c=first_name.charAt('5');
console.log("charAt 5 is : " +c);

//charcodeAt function it gives ASCII for given charector in position not a charector try it c=console.charcodeAt('V');

c=first_name.charCodeAt('5');
console.log("charcodeAt 5 is : " +c);

//substr function

c=first_name.substr(0,3); //the strike out represent the @deprecated — A legacy feature for browser compatibility
console.log("substr : "+c);

//Substring function

let text = "013495234580";
c=text.substring(0,4); // (method) String.substring(start: number, end?: number | undefined): string
                       //Returns the substring at the specified location within a String object.
console.log("substring : "+c);

c=text.substring(4); 

console.log("substring : "+c);

c=text.substring(4,0); 

console.log("substring : "+c);

c=text.substring(40,30); 

console.log("substring : "+c);


//slice function

c=text.slice(2,7);
//it print index of element and taken as start number example (2,7) 2 is starting number index of 2 is 3
//it print the until the position of element and taken as ending number 7 is position position of 7 is 2
console.log("slice "+c);

c=text.slice(7,1);
console.log("slice "+c);

c=text.slice(23,40);
console.log("slice "+c);
 
//negative indexing

console.log("charcodeAt 5 is : " +c);

//split in js 

let a="JS is a web programming";
c=a.split(" ");
console.log("split :"+c);
console.table(c);


//replace in js

a="I am from villupuram";
console.log("Before replace : "+a)
c=a.replace('villupuram','kallakurichi');
console.log("After replace : "+c);

// includes in js

const pets=['cat','dog','bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('rat'));

//trim in js - used to remove the unwanted white spaces 
a=" joes ";
console.log("Before trim : "+a.length);
a=a.trim();
console.log("After trim : "+a.length);

//padstart , padEnd in js
// note the value 4 should count 5 in it
//see the console for better result
a="5";
a=a.padStart(4,0);
console .log(a);

a="5";
a=a.padEnd(4,0);
console .log(a);

a="5";
a=a.padStart(4,"$"); // try it by putting  symbol $ without quotation
                     //always enter the symbol in quotation
console .log(a);


//long literals in javascript
//method 1

let longString="C programming language is a machine-independent programming language "+  " that is mainly used to create many types of applications" + " and operating systems such as Windows, and other " + "complicated programs such as the Oracle database, Git, Python interpreter," + "and games and is considered a programming foundation "

console.log(longString);

//method 2

longString="C programming language is a machine-independent programming language \  that is mainly used to create many types of applications \ and operating systems such as Windows, and other \ complicated programs such as the Oracle database, Git, Python interpreter,\ and games and is considered a programming foundation "

console.log(longString);

//String.fromCharcode()

console.log(String.fromCharCode(86, 87 , 88, 89));


























