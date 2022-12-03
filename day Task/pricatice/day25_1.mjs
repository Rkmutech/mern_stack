import { sub,sum } from "./day25.mjs";
console.log(sub(10,67));
console.log(sum(12,45));

let a="Ram";

function print()
{
    console.log(a);
}
print();

function local_scope()
{
    let a="Block_scope ";
    console.log(a);
}
local_scope();

var b="Lexicla_scope";
function lexicla()
{
    console.log(b);
}
lexicla();

function functional()
{
    let b="Functional_scope";
    console.log(b);
}
functional();

