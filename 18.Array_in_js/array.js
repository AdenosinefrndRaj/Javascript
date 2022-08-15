//to see output first clear the consol.log() in line 38
let a=[10,20,30,40];
console.log(a);
console.table(a);
console.log("the index value of a[1] "+a[1]);

//let b= new Array[10,20,30,40];
let b= new Array(10,20,30,40);  //array constructor method
 console.table(b);

 let c=new Array("vj",20,false,
       {m1:100,m2:200,m3:300});

       console.table(c);
//forEach() method

const number=[1,2,3,4,5,6,7,8,9,10];
//value,index,array - three parameters
number.forEach((value)=>{console.log(value);});

number.forEach((value,index)=>
             {console.log("Index : "+index +"Value : "+value);});


const users=[
    
    {full_name:"Raj",city:"villupuram",age:"20"},
    
    {full_name:"chandru",city:"Madurai",age:"21"},
  
    {full_name:"Root",city:"Ireland",age:"24"},
 
    {full_name:"Roy",city:"England",age:"25"},
];

users.forEach((value)=>{console.log("Values : "+value.full_name);
  });
console.clear()

  //map() Method inJavascript

  
const number1=[1,2,3,4,5,6,7,8,9,10];

//three parameter map(value,index,array)

let sqr=number1.map((value)=>
          {return Math.sqrt(value).toFixed(2);
        });

console.log(sqr);
console.table(sqr);


const users1=[
    
    {full_name:"Raj",city:"villupuram",age:20},
    
    {full_name:"chandru",city:"Madurai",age:21},
  
    {full_name:"Root",city:"Ireland",age:17},
 
    {full_name:"Roy",city:"England",age:16},
];

console.table(users1);

let eligible_status=users1.map((user)=>({ // to get set object so we put extra bracket in arrow function =>({})
    //name:user.full_name,
    //age:user.age,
    //city:user.city,
    //another method spread operator
    ...user,
    status:user.age>=18?"Eligigble to vote":"Not eligible to vote"
}));

console.table(eligible_status);

console.clear();


//slice in js

const numbers=[1,2,3,4,5,34,6,7,8,9,10];

//slice(start,end)

console.log(numbers);

console.log("Slice : "+numbers.slice());

console.log("Slice(2): "+numbers.slice(2));

console.log("Slice(2,6): "+numbers.slice(2,6));

console.clear();


//splice in js

/*
    Splice is used to remove elements in array

    It will make change in original array
    
    syntax:
           remove_element=splice(start,length,new elements)
*/

const n1=[1,2,3,4,5,34,6,7,8,9,10];

console.log("Before splice : " +n1);

let remove_element=n1.splice(2);

console.log("Removed items : "+remove_element);


console.log("After splice : " +n1);

//----------------------------------------

const n2=[6,5,3,4,5,34,6,7,8,9,10];

console.log("Before splice : " +n2);

 remove_element=n2.splice(2,2);

console.log("Removed items : "+remove_element);


console.log("After splice : " +n2);
//-------------------------------------------
const n3=[6,5,3,4,5,34,6,7,8,9,10];

console.log("Before splice : " +n3);

remove_element=n3.splice(2,2,[27,28,48]);

console.log("Removed items : "+remove_element);

console.log("After splice : " +n3);

console.log(n3);
//-------------------------------------

const n4=[6,5,3,4,5,34,6,7,8,9,10];

console.log("Before splice : " +n4);

n4.splice(2,0,100,200);

console.log("After splice : " +n4);
//---------------------------------------

console.clear();

//concat in javascript

const a1=[10,12,22];
const b1=[33,44,55];
const c1=[66,77,88];

let d=a1.concat(b1);

console.log(d);


 d=a1.concat(b1,c1);

 console.log(d);

 d=a1.concat(b1,c1,41,23,45);

 console.log(d);

 d=a1.concat(b1,c1,41,23,45,['28','38','49','58']);
 
 console.log(d);

 console.table(d);

 //sort in javascript

 const names=["Raj","arun","kane","virat"];

 console.log("Before sort : "+names);

 names.sort();

 console.log("After sort : "+names);
   //---------------------

 const num=[10,100,23,80,980];

 console.log("Before sort : "+num);


 num.sort();
 console.log("After sort : "+num);

 num.sort((a,b)=>{
  return a-b;     

})
console.log("ASCENDING sort : "+num);

num.sort((a,b)=>{
  return b-a;     

})
console.log("DSCENDIN sort : "+num);



const user2=[
    
  {full_name:"Raj",city:"villupuram",age:"20"},
  
  {full_name:"chandru",city:"Madurai",age:"21"},

  {full_name:"Root",city:"Ireland",age:"24"},

  {full_name:"Roy",city:"England",age:"25"},
];

console.log(user2);

console.table(user2);

user2.sort((a,b)=>{
  return a.age-b.age;

});

console.table(user2);

user2.sort((a,b)=>{

    if(a.full_name<b.full_name) return 1;
    if(a.full_name>b.full_name) return -1;
    return 0;

});

console.table(user2);

console.clear();


//Fill method in js array

//Fill(value,start,end)

let n=[1,2,3,4,5,6,7];

console.log("Before Fill : "+n);

//n.fill(20);
console.log("After Fill : "+n);

//n.fill("a");

//console.log("Char Fill : "+n);

//n.fill(30,3);

//console.log(" where Start Fill : "+n);

n.fill(20,3,5);

console.log("start to end Fill : "+n);









 













