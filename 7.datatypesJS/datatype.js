//[**always type String function like this starting caps 'S' String()]
//Datatype in javascript 
/*
   JS  Dynamic Programming
   
   javascript can be used as static programming using superset framework
  
   Primitive Datatypes
   String [**always type String function like this starting caps 'S' String()]
   Number  eg: 1.5,5
   Boolean eg: True ,False
   Null
   Undefined
   Symbol E6

   Refrence types
    Array
    Object Literals
    Date
*/
 var a=45;

 // see the for output 
 // To identify which type it is
 console.log(typeof a);

 var fname="Vj raj";

 console.log(typeof fname);
 
 var isMarried=true;

 console.log(typeof isMarried);

 var phone=null;
               // null is a datatype but js it should be type of object
 console.log(typeof null);
  
 let b;
 console.log(typeof b);

 // symbol is introduced in E6 2015

 // It is used for specifying unique id to object

 const s1=Symbol();
 console.log(s1);
 //symbol gives unique id to variable s1 and s2, but we didn't see in our eye but browser can understand
                    
 const s2=Symbol();
 console.log(s2);

// to check wheather it is same or not
 console.log(s1==s2);

 //Reference types

 var courses=['C','C++','JAVA']; 
 var student={
    'name':'Vj',  //comma and semicolon and single quotation and double quotation is important
    'age' : 32 
 };
 console.log(typeof courses); //object
 
 console.table(courses);

// to print the current date we create instances for date() class and then, object is called instances of classes;
 var d=new Date();
 console.log(typeof d);
 console.log(d);
 


