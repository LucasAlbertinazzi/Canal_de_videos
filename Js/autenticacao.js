document.addEventListener("DOMContentLoaded", auto());

function auto(){

    if(localStorage.getItem('usuario') != null)
    {
        if(location.href.toString().includes("login.html")){
            location.href = "home.html";
        }
    }
    else
    {
        if(!location.href.toString().includes("login.html")){
            location.href = "login.html";
        }
    }
    
};