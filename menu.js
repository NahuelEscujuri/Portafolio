const menuIcon = document.getElementById("menu-icon")
const menu = document.querySelector(".navegation") 
let menuActive = false;



menuIcon.addEventListener("click",()=>{
    if(menuActive){
        menuActive=false;
        menu.classList.remove("active");
        menuIcon.classList.remove("active");
    }
    else{
        menuActive = true;
        menu.classList.add("active");
        menuIcon.classList.add("active");
    }
})

window.addEventListener("click",(event)=>{
    if(event.target.id != menuIcon.id){
        menuActive=false;
        menu.classList.remove("active");
        menuIcon.classList.remove("active");
    }
})
