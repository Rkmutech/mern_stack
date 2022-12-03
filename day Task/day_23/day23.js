class emoloyee{
    emp1={
        name:"Ram",
        empid:01,
        mailid:"ramkumar.199873@gamil.com",
        Address:
        {
            'cityname':'Trichy',
            Disrict:"Trichy",
            pin:621313,
        },
        hobies:['Codeing','Reading','watchingyoutubevideo','Music']

    };
    emp2=
    {
        name:"kumar",
        empid:01,
        mailid:"kumar.199873@gamil.com",
        Address:
        {
            'cityname':'Trichy',
            Disrict:"Trichy",
            pin:621313,
        },
        hobies:['playing','Reading','watchingyoutubevideo']

    };

}
const empdata=new emoloyee();
const body=document.querySelector('#body');
console.log(body);
const minbox=document.createElement('div');
minbox.className='minbox';
body.appendChild(minbox);
Object.keys(empdata).map((emp,index)=>{
    const empbox=document.createElement('div');
    empbox.className=`emp${index+1}`;

    const h2=document.createElement('h2');
    h2.innerHTML=`Name ${empdata[emp].name}`;

    const h3=document.createElement('h3');
    h3.innerHTML=`Emp id ${empdata[emp].empid}`;

    const addbox=document.createElement('div');
    addbox.className='adderbox';

    const h32=document.createElement('h3');
    h32.innerHTML='Address:';

    addbox.appendChild(h32);

    Object.keys(empdata[emp].Address).map((add)=>{
        const addcomp=document.createElement('p');
        addcomp.innerHTML=`<b> ${add}:</b>  ${empdata[emp].Address}`;
        addbox.appendChild(addcomp);
    });

    



});
console.log(Object.keys(empdata));