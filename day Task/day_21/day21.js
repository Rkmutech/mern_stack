let array=[2,3,4,5,6];
console.log(array);
array.pop();
console.log(array);
array.push(1);
console.log(array);
array.unshift(-1,0,1);
console.log(array);
array.shift();
console.log(array);
let array1=[
    {
        name: 'Rahul',
 empId: 3567,
 mailId: 'mailme@gmail.com',
 Address: {
 'City Name': 'Vijayawada',
 District: 'Krishna district',
 pin: 526894,
    },
    Hobbies: ['Netflix', 'Tennis', 'Coding'],
},
{
    name: 'Ravi',
    empId: 9867,
    mailId: 'ravimail@gmail.com',
    Address: {
    'City Name': 'Guntur',
    District: 'Prakasham district',
    Pin: 685479,
    },
    Hobbies: ['Reading', 'Swimming', 'Baking'],
},
{
    name: 'Santosh',
    empId: 8876,
    mailId: 'santoshmail@gmail.com',
    Address: {
        'City Name': 'Warangal',
 District: 'Hanamkonda district',
 Pin: 996587,
},
 Hobbies: ['Gym', 'Reading Novels'],
 },
 {
    name: 'Surya',
    empId: 3469,
    mailId: 'suryamail@gmail.com',
    Address: {
    City: 'Nazamabad',
    District: 'Nazamabad district',
    Pin: 648597,
    },
    Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
    },
    {
        name: 'Kiran',
        empId: 8864,
        mailId: 'kirammail@gmail.com',
        Address: {
            city: 'Karimnagar',
            district: 'Karimnagar district',
            pin: 666954,
            },
            Hobbies: ['Gaming', 'Cooking', 'Music'],
            },
        ];
        array1.map((ele)=>{
            console.log(ele.name);
            let arr3=[];
            Object.keys(ele.Address).map((item)=>
            {
                arr3.push(ele.Address[item]);
            });
            console.log(arr3);
            ele.Hobbies.forEach((hobby)=>
            {
            {
                console.log(hobby);
            }
        });
        
        });