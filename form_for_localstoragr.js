const datasubmit = () => {
    let userdata ={
        name : document.querySelector('#uname').value,
        email : document.querySelector('#uemail').value,
        password : document.querySelector('#upass').value,
    }
    localStorage.setItem("userdata",JSON.stringify(userdata))
}