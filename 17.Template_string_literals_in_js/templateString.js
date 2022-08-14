let full_name="Vjraj";

let age="20";

let city="villupuram";

let output="";

output="<table border='1'><tr><th>Name</th><td>"+full_name+"</td></tr><tr><th>Age</th><td>"+age+"</td></tr><tr><th>City</th><td>"+city+"</td></tr></table>";


//template string in es6

output+=`<hr>
<table border='1'>
<tr><th>Name</th><td>${full_name}</td></tr>
<tr><th>Age</th><td>${age>=20?"Good":"Bad"}</td></tr>
<tr><th>City</th><td>${city}</td></tr>
</table>`;


//long literals it is in es5

output+="<hr><table border='1'>"+
"<tr><th>Name</th><td>"+full_name+"</td></tr>" +
"<tr><th>Age</th><td>"+age+"</td></tr>" +
"<tr><th>City</th><td>"+city+"</td></tr>"
"</table>";







document.body.innerHTML=output;