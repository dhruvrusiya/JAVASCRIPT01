const data = () => {
    let userdata={
        email : document.querySelector('#email').value,
        pass : document.querySelector('#pass').value,
    }
    localStorage.setItem("data",JSON.stringify(data))
}


var data1=JSON.parse(localStorage.getItem("userdata"))

function auth(){
    let logindata={
        email : document.querySelector('#email1').value,
        pass : document.querySelector('#pass1').value,

    }
    if(data1.email != logindata.email || data1.pass != logindata.pass){
        alert("user not found")
        return false
    }
}