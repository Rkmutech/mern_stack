class graph{
    constructor()
    {
        this.ad=new Map();
    }
    addnode(node)
    {
        this.ad.set(node,[]);

    }
    addedge(orgin,destination)
    {
             this.ad.get(orgin).push(destination);
    }
    removenode(airport)
    {
        
    }
}
const ad=new Map();
const g1=new graph();
g1.addnode("A");
g1.addnode("B");
g1.addnode("C");
g1.addnode("D");
g1.addedge("A","B");
g1.addedge("A","c");
g1.addedge("B","D");
g1.addedge("C","D");
console.log(g1);