console.log("Doing great!");
import {setHomeContent} from "./home.js";
import { setContactContent } from "./contact.js";


const content = document.getElementById("content")
const homeButton = document.getElementById("home-button")
const aboutButton = document.getElementById("about-button")
const contactButton = document.getElementById("contact-button")

homeButton.addEventListener('click',()=>{    
    content.textContent = "";
    setHomeContent();
})

contactButton.addEventListener('click',()=>{    
    content.textContent = "";
    setContactContent();
})

