class mobile
{
    constructor(brand)
    {
        this.brand1=brand;
    }
    show()
    {
        console.log("mobile Brand is :"+this.brand1);
    }
   
}

class model extends mobile
{
   
    constructor(brand,mobile)
    {
        super(brand);
        this.mobile_name=mobile;
    }
   
    view()
    {
        this.show();
        console.log('the name of mobile name is :'+ this.mobile_name);
    }
   
}


const obj=new model("Apple","pro 13");
obj.view();
//obj.lion();