/*const coins=[1, 5, 10, 25, 50, 100];
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
 */

// Javascript program to find minimum
// number of denominations

// All denominations of Indian Currency
let deno=[1,  5, 10, 25,
	50, 100];
let n = deno.length;

function findMin(V)
{
	// Initialize result
		let ans = [];

		// Traverse through all denomination
		for (let i = n - 1; i >= 0; i--)
		{
			// Find denominations
			while (V >= deno[i])
			{
				V -= deno[i];
				ans.push(deno[i]);
			}
		}

		// Print result
		for (let i = 0; i < ans.length; i++)
		{
			console.log(
				" " + ans[i]);
		}
}

// Driver code
n = 256;
console.log(
"Following is minimal number "
+"of change for " + n + ": ");
findMin(n);


// This code is contributed by rag2127

