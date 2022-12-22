class hastable
{
    constructor(size=50)
    {
        this.buckets=new Array(size);
        this.size=size;
    }
    hash(key)
    {
        return key.toString().length%this.size;
    }
    //insert data
    setitem(key,value)
    {
        let index=this.hash(key);
        if(!this.buckets[index])
        {
            this.buckets[index]=[];
        }
        this.buckets[index].push([key,value]);
        return index;
    }
    //searching data
    getitem(key)
    {
        let index=this.hash(key);
        if(!this.buckets[index])
        return null;
    }
}