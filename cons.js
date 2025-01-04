// let vs var
// let duble declare nahi hota 
// var double declare hota h



// let n= parseInt(prompt("enter a number :"))

// switch(n){
//     case 1:
//         alert("c++")
//         break;
//     case 2:
//         alert("js")
//         break
//     default:
//         alert("wrong value")      
// }

// loops in js 
// do while
// while
// for
// for in 
// for Of 
// for each -> loop or method 

// //do while

// var a=1
// do{
//     console.log(a);
// }while(a<6)

// ternary operator


// let n= parseInt(prompt("entera number"))

// n%2==0 ? console.log("even number") :console.log("odd number");

// while loop

// let a=1
// while(a<=10){
//     console.log(a);
//     a++
// }


// wap to take integer from user and check number is even or odd if n
//umber is even then print the table of the number and number is odd then print 10 to 1 digits

// let n=parseInt(prompt("enter number chacha"))

// if(n%2==0){
//     let i=1
//     while(i<=10){
//         console.log(n+"*"+i+ "="+n*i)
//         i++
//     }}
//     else{
//         let a=10
//         while(a>=1){
//             console.log(a)
//             a--
//         }
//     }

  /////////////////////////////// for loop samajh gaya dhroop
// for(initialisation; codition ; inc/dec){
//     //code
// }

// for loop samajh gaya dhroop

// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// for(let i=15;i>0;i--){
//     if(i==5 || i==10){
//         console.log(i*i);
//     }else{
//         console.log(i);
//     }
// }

 // nested for loop

//  for(let i=2;i<=3;i++){
//     for(let j=1;j<=10;j++){
//       console.log(i*j);
//     }
// }

// for(let i=1;i<=5;i++){
//     document.write("*");
// }
//                                            star pattern right angle triangle 
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.write("*");
//     }
//     document.write("<br>")
// }


///////////////////////////////////////////functions in js ///////////////////////////////////////////////////////////////////
//  two types of function in js
//  arrow function
    //  iife function
    //  callback function
    // Named function and anonymus function

//1. user definr function
      // typed of user define
    // without argument and no return 
    // with argument and no return
    // with argument and with return
    // without argument and with return
    

//2. pre-define function


// function indntifire(parameter){
//     //statement 
// }

// indntifire()  // calling the function
//  parts of function
// 1.function declaration
// 2. function defination
// 3.function calling
 
//////////////////////////////////////////function code start //////////////////////////////////////////////

// function dhruv(){
//     console.log("hello chacha chai pelo");
// }
//  dhruv()
//  dhruv()

////////////////////////// function to print sqrare of odd number

// function abc(){
//   for(let i=10;i>=0;i--){
//     if(i%2!=0){
//       console.log(i*i);
//     }
//   }
// }
// abc()


// function with argument and without return

// function myfun(a){
//   console.log(a+a)
// }
// myfun(8)

// function myfun(a){
//   console.log(a+a)
// }
// myfun(parseInt(prompt("enter the value")))


// w a p to find area of circle  with argument and without return

// function aoc(r){
//   console.log(3.14*r*r+ "cm");
// }
// aoc(parseInt(prompt("enter the radius sir in cm")))

////////////////////////////////////////////////function with argument and with return  /////////////////// 

// function myfun(radius){
//   return 3.14*radius*radius
// }

// let c= myfun(5)
// console.log(c)
// console.log(myfun(10))


////////////////////////////////////////////dom = document object model ////////////////////////////

/////////////////////////////////// get element by id

// let head1=document.getElementById('head')
// head1.innerHTML="code with cybrom"

// ////////////////////////get element by class as a array

// let heading1=document.getElementsByClassName("heading")
//   heading1[0].innerHTML="markup language"
//   heading1[1].innerHTML="heloo sir"

// //////////////////////////get element by tags name 

//   let list=document.getElementsByTagName("li")
//   list[1].innerHTML="service"

  
// let image=document.getElementById("image")
// image.src="https://images.pexels.com/photos/29510136/pexels-photo-29510136/free-photo-of-stunning-snowy-matterhorn-mountain-peak-in-switzerland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"

// let h=document.getElementById("head")
// h.style.color="blue"
// h.style.fontSize="80px"
// h.style.backgroundColor="yellow"

// let head2=document.getElementById("head2")
// head2.style.cssText="background-color:red; color:white; padding:20px"

// head2.innerHTML="<i>hello chacha</i>"
// head2.textContent="<i>hello chachi</i>"

// document.getElementById("head").innerHTML="paragraph"

let list=document.getElementsByTagName("li")
// list[0].style.color="blue"
// list[2].style.color="blue"
// list[4].style.color="blue"
// list[6].style.color="blue"
// list[8].style.color="blue"
// for(let i=0;i<9;i++){
//   if(i%2==0){
//   list[i].style.color="blue"
// }
// }

////////////////////////////////////////////Query selector //////////////////////////////

// let h=document.querySelector("#head")
// h.style.color="pink"

// document.querySelector(".head2").style.color="red"
 //////////////////////////////////////////////////////////  change using class name


// let b=document.getElementsByClassName("goku")
// b[0].textContent="qasim"

// let c=document.querySelector("#head")
// c.style.color="yellow"

 /////////////////////////////////////taget by query sekector all

// let c=document.querySelectorAll("h5")
// c.style.color="blue"