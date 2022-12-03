let array=[12,45,78,90,10,45,-5,45];
var n=array.length;
console.log("The array elements is : "+array);

function search(array,n)
{
    var max=0,min=0;
   // console.log(max);
   // console.log(min);
   max=array[0];
   min=array[0];
    for(let i=0;i<n;i++)
    {
        
        if(array[i]>max)
        {
            max=array[i];
        }
        if(array[i]<min)
        {
            min=array[i];
        }
        
    }
    console.log("The min element is :"+min);
    console.log("The max element is :"+max);
}
function key(array,key1,n)
{
   var print=0;
    for(let i=0;i<n;i++)
    {
        if(array[i]==key1)
        {
           print=[i];
        }
    }
    console.log("The key element index  is :"+print);
}
console.log("The key element is 10");

var key1=10;
key(array,key1,n);
search(array,n);

