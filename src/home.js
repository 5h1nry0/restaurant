const content = document.getElementById("content");
import photo from "./jirayu-koontholjinda-G675o-lxbnQ-unsplash.jpg"

const setHomeContent=()=>{
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Hai!";
    content.appendChild(headline);

    const homeImage = document.createElement("img");
    homeImage.setAttribute("src",photo);
    homeImage.setAttribute("heigth",'200px');
    homeImage.setAttribute("width",'200px');
    content.appendChild(homeImage);

    const homeText = document.createElement("p");
    homeText.textContent = "Where the flavors of Japan come to life in every dish. Our restaurant is dedicated to bringing you an authentic Japanese dining experience, right here in the heart of Lima. Whether you're craving sushi, sashimi, ramen, or any other Japanese delicacy, we've got you covered. Step inside and embark on a culinary journey that will tantalize your taste buds and leave you craving for more.";
    content.appendChild(homeText);
}

export {setHomeContent}