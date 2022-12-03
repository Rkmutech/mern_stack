resturantList=[{
id:1,
resturantname:"Anjappar",
address:"Annamalainagar",
city:"Trichy",

},
{
    id:2,
    resturantname:"A2B",
    address:"passportoffice",
    city:'Trichy'
},
{
    id:3,
    resturantname:"Bannaleaf",
    address:"Kct",
    city:"Kovai"
},
{
    id:4,
    resturantname:'',
    address:'',
    city:''
},
];

let userdata=[];

const getdata=()=>{
    const mypromise=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve(userdata);

},3000 );
    });
    return mypromise;
};

const myfun=async()=>{

}