function sum(a)
{
    
    return  function(b)
    {
        return function(c)
        {
            console.log("The curring function a=10+b=30+90");
            console.log( a+b+c);
        }
    }
}

sum(10)(30)(90);
//console.log(print);