var fruits=["apple","Grape","Guava","orange"];
        function unshift(arr,element)
        {
            for(let i=arr.length;i>=0;i--)
            {
                arr[i]=arr[i-1];
                if(i==0)
                {
                    arr[i]=element;
                }
            }
            
        }
        console.log("Before unshift array:" +fruits);
            unshift(fruits,"kiwi");
            console.log("After unshift array:" +fruits);
            //fruits.forEach(myFunction);
            //function myFunction(item, index) {
              //  text += index + ": " + item + "<br>"; 
              //}
              //console.log("After unshift array"+text);