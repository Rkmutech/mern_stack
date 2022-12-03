class Stack
{
    constructor()
    {
        this.item=[];
    }
    add(element)
    {
        return this.item.push(element);
    }
    remove(element)
    {
        if(this.item.length>0)
        {
            return this.item.pop();

        }
    }
    peek(element)
    {
        return this.item[this.item.length-1];
    }
    isEmpty()
    {
        return this.item[this.item.length==0];
    }
    size()
    {
        return this.item.length;
    }
    clear()
    {
        this.item=[];
    }

}

let stack=new Stack();
stack.add(1);
stack.add(4);
stack.add(8);
stack.add(5);
console.log(stack.item);
stack.remove();
console.log(stack.item);
stack.peek();
console.log(stack.item);

//stack.push(3);
stack.clear();
console.log(stack.item);
stack.isEmpty();
console.log(stack.item);
