let array=[23,45,872,4,6,12];
let n=array.length;
function bubblesort(array,n)
{
    for( var i=0;i<n;i++)
    {
        for(var j=0;j<n-1-i;j++)
        {
            if(array[j]>array[j+1])
            {
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
}
console.log("Before Bubble sort Algorithm :"+array);
bubblesort(array,n);
console.log("After Bubble sort Algorithm");
//console.log(n);
console.log(array);