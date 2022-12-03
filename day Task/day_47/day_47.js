const coins=[1, 5, 10, 25, 50, 100];
coins.sort();
const amount=256;
 function greedy(coins,amount)
 {
    var amount1=0;
    var temp=0;
    if(amount==0)
    return 0;
    
    for(var i=coins.length-1;0<=i;i--)
    {

        amount1+=coins[i];
        console.log(amount1);
        
    }
 }
 greedy(coins,amount);