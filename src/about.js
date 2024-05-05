const content = document.getElementById("content");
import photo from "./thomas-marban-EHK-EH1SRzQ-unsplash.jpg"

const setAboutContent=()=>{
    const headline = document.createElement("h1");
    headline.textContent = "About Us";
    content.appendChild(headline);

    const homeImage = document.createElement("img");
    homeImage.setAttribute("src",photo);
    homeImage.setAttribute("heigth",'200px');
    homeImage.setAttribute("width",'200px');
    content.appendChild(homeImage);

    const aboutText1 = document.createElement("p");
    aboutText1.textContent = "At Hai!, we are more than just a restaurant we are a family. As a proud family business, we are dedicated to bringing the authentic flavors and warm hospitality of Japan to our community. Rooted in tradition, our restaurant embodies the essence of Japanese culture in every dish we serve. Passed down through generations, our recipes reflect a deep respect for the artistry and heritage of Japanese cuisine. From the meticulous preparation of sushi to the soul-warming embrace of ramen, each dish tells a story of tradition and craftsmanship.";
    content.appendChild(aboutText1);

    const aboutText2 = document.createElement("p");
    aboutText2.textContent = "Beyond the kitchen, our commitment to Japanese culture extends to every aspect of the dining experience. From the tranquil ambiance of our dining room to the graceful movements of our sushi chefs, we strive to create an atmosphere that honors the spirit of Japan. As a family business, we take pride in nurturing personal connections with our guests, treating each visit as an opportunity to welcome you into our extended family. Whether you're sharing a meal with loved ones or savoring a moment of quiet reflection, we invite you to join us on a journey of taste and tradition at Hai!.";
    content.appendChild(aboutText2);
}

export {setAboutContent}