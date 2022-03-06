const menu_Btn=document.querySelector(".menu-btn")
const navEl=document.querySelector("nav")
const navList=document.querySelector(".nav-list")
const ulEl=document.querySelector("ul")
const arrow=document.querySelector(".menu-arrow")
const projects=document.querySelectorAll(".project")
const snapShot=document.querySelector(".snapshot")
const links=document.querySelector(".links")
const projectLink=document.querySelectorAll(".project-link")



menu_Btn.addEventListener("click", ()=>{

    if(window.innerWidth>1374){
    navEl.classList.toggle("toggleNav")
    } 
})









