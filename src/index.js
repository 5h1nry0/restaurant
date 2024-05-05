import { setHomeContent } from "./home.js";
import { setContactContent } from "./contact.js";
import { setAboutContent } from "./about.js";
import { setMenuContent } from "./menu.js";
import './style.css'


const content = document.getElementById("content")
const homeButton = document.getElementById("home-button")
const aboutButton = document.getElementById("about-button")
const contactButton = document.getElementById("contact-button")
const menuButton = document.getElementById("menu-button")
const buttons = [homeButton, aboutButton, contactButton, menuButton]

homeButton.addEventListener('click', function (){    
    buttons.forEach(function(el){
        el.classList.remove("active")
    })
    content.textContent = "";
    homeButton.classList.add("active")
    setHomeContent();
})

contactButton.addEventListener('click',()=>{
    buttons.forEach(function(el){
        el.classList.remove("active")
    })    
    content.textContent = "";
    contactButton.classList.add("active")
    setContactContent();
})

aboutButton.addEventListener('click',()=>{    
    buttons.forEach(function(el){
        el.classList.remove("active")
    })
    content.textContent = "";
    aboutButton.classList.add("active")
    setAboutContent();
})

menuButton.addEventListener('click',()=>{    
    buttons.forEach(function(el){
        el.classList.remove("active")
    })
    content.textContent = "";
    menuButton.classList.add("active")
    setMenuContent();
})

setHomeContent();