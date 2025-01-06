let arr=[
    {
        id :1,
        name:"dhurv",
        age:22,
        city:"bhopal"


    },{
        id :2,
        name:"harsh",
        age:28,
        city:"bhopal"


    },{
        id :3,
        name:"aditya",
        age:51,
        city:"indore"


    }

]

let st=arr.map((e)=>{return e})
console.log(st);

let st2=arr.map((e)=>{return e.name})
console.log(st2);

let st3=arr.filter((e)=>{return e.age%2==0})
console.log(st3);

let st4=arr.filter((e)=>{return e.age>25})
console.log(st4);
