const datasubmit = () => {
  
    let userdata ={
       
        name : document.querySelector('#uname').value,
        email : document.querySelector('#uemail').value,
        number : document.querySelector('#unumber').value,
        
    }
    localStorage.setItem("userdata",JSON.stringify(userdata))
   

}