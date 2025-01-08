let student=[
    {
        roll :1,
        name:"dhruv",
        age:15,
        city:"bhopal"

    },
    {
        roll :2,
        name:"aditya",
        age:20,
        city:"bhopal"

    },{
        roll :3,
        name:"harsh",
        age:16,
        city:"indochina"

    },

]

let finaldata= student.map((e)=>`
      
       <tr>
       <td> ${e.roll} </td>
       <td> ${e.name} </td>
       <td> ${e.age} </td>
       <td> ${e.city} </td>
       </tr>

`).join("")

document.querySelector('#displaydata').innerHTML=finaldata