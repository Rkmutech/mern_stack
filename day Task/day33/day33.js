/*const array=["music","Codeing","Drving","Fun"];
console.log(array);
array.forEach(myfun);

function myfun(item)
{
    console.log(item);
}
const person={
    name:"Ram",
    Age:24,
    Email:"ramkumar.199873@gmail.com",
    phone_number:8667635102

};
console.log(person);


let text="";
for(x in person)
{
  console.log( text+=person[x])
  } 

  const objts=new Set();
  objts.add("Ram");
  objts.add("kumar");
  console.log(objts);

  console.log("maps datatypes");

  const map_1=new Map();
  map_1.set(1,"Music");
  map_1.set(2,"coding");
  map_1.set(3,"Ram");
  console.log(map_1);
  console.log(map_1.get(1))*/

  

  function string_rev(element)
  {
    var array=""
    for(var i=element.length;i>=0;i--)
    {
               array+=element[i];
    }
    return array;
  }

 var name= string_rev("ram");
 console.log(name);
 
