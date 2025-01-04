// let ob1={
//     name :"dhruv",
//     age : 9
// }
// let ob2 ={
//     contact: 4644549
// }

// let ob3={
//     ...ob1,...ob2
// }
// console.log(ob3);

// delete or keys and values in js 

// ob={
//     name:"dhruv",
//     contact:541541,
//     age :45

// }


// let val= Object.values(ob)
// console.log(val);

// let k=Object.keys(ob)
// console.log(k[1]);

// delete ob.age

// console.log(ob);

// array of object

let employee=[
    {
        emp_id:1,
        emp_name:"chanchal sir", 
        emp_designation:"technical trainer" 
      },
      {
        emp_id:2,
        emp_name:"ajay sir", 
        emp_designation:"technical trainer" 
      },
      {
        emp_id:3,
        emp_name:"ram sir", 
        emp_designation:"technical trainer" 
      },
      {
        emp_id:4,
        emp_name:"amit sir", 
        emp_designation:"technical trainer" 
      },
]
let a={    emp_id:3,
    emp_name:"Qasim sir", 
    emp_designation:"technical trainer" }
// employee.push(a)

//  employee.pop() //for delete last element

// employee.unshift(a) 
// slice function 
let b=employee.slice(1,2);
console.log(b);
// splice function
employee.splice(2,2,a
    
)



console.log(employee);



