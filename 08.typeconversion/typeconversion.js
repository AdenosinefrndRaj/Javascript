//type conversion

//1.datatypes into string

let a;

a=25;
console.log(a,typeof a); //we can use one console for display and type of
// we can see that number in one color and string in different color

a=String(a);
console.log(a,typeof a);
// now 25 number type is a convert into string type 25

a=25.5;
console.log(a,typeof a);

a=String(a);
console.log(a,typeof a);
//boolean
a=true;
console.log(a,typeof a);

a=String(a);
console.log(a,typeof a);
//Date() 
a= new Date();
console.log(a,typeof a);

a=String(a);
console.log(a,typeof a);

a= [1,2,4,5,6];
console.log(a,typeof a);

a=String(a);
console.log(a,typeof a);


//alternative type a.toString()
a= new Date();
console.log(a,typeof a);

a=a.toString(a);
console.log(a,typeof a);

// To see the 1.datatypes to String conversion

// first remove console.log(clear) and put comment to remaining 2.string to number Conversion;

console.clear();
//---------------------------------------------------------------------------------------------------------

//2.string value to number  datatypes Conversion

a="125"; //string is put into single or double quotation
console.log(a,typeof a);

a=Number(a);
console.log(a,typeof a);

a="125"; //string is put into single or double quotation
console.log(a,typeof a);

a=Number(a);
console.log(a,typeof a);
//-------------------------------------------------------------------------------------------------------

//3.string to boolean  datatypes Conversion

a=true;
console.log(a,typeof a);
                          // In boolean, binary  value of true is 1 ,so we get 1 number in console
a=Number(a);     
console.log(a,typeof a);

a=true;
console.log(a,typeof a);
                          // In boolean, binary  value of false is 1, so we get 0 number in console
a=Number(a);     
console.log(a,typeof a);
//--------------------------------------------------------------------------------------------------------------
                         
//4. Can we convert array into number - No
a=[1,2,3,4];
console.log(a,typeof a);
                        // if we run this code the console says it's a object not an(NaN)number
a=Number(a);     
console.log(a,typeof a);
//----------------------------------------------------------------------------------------------------------------

//*****5.Can we try convert letter in string into number - No

a="Vj raj";
console.log(a,typeof a);

a=Number(a);   //// if we run this code the console says it's a string not an(NaN)number
console.log(a,typeof a);
//we can convert value in string to number as we mentioned in 2.string value to number

//--------------------------------------------------------

//using parseInt() we convert

a="25.5";
console.log(a,typeof a);

a=parseInt(a); // it only convert only number without decimal
console.log(a,typeof a);

//using parseFloat()
a="25.5";
console.log(a,typeof a);

a=parseFloat(a); // it only convert only number without decimal
console.log(a,typeof a);

// SEE THE CONSOLE FOR BETTER UNDERSTANGING