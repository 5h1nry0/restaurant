const content = document.getElementById("content");
import photo from "./google-maps-22-1200x675.jpg"

const setContactContent=()=>{
    const headline = document.createElement("h1");
    headline.textContent = "Contact us";
    content.appendChild(headline);

    const phoneTitle = document.createElement("h2");
    phoneTitle.textContent = "Phones";
    content.appendChild(phoneTitle);

    const phoneReserves = document.createElement("h3");
    phoneReserves.textContent = "For reserves";
    content.appendChild(phoneReserves);

    const phoneReservesText = document.createElement("p");
    phoneReservesText.textContent = "+511 2415559";
    content.appendChild(phoneReservesText);

    const phoneInquiries = document.createElement("h3");
    phoneInquiries.textContent = "For other inquiries";
    content.appendChild(phoneInquiries);

    const phoneInquiriesText = document.createElement("p");
    phoneInquiriesText.textContent = "+51 959444091";
    content.appendChild(phoneInquiriesText);

    const addressTitle = document.createElement("h2");
    addressTitle.textContent = "Find us here";
    content.appendChild(addressTitle);

    const contactImage = document.createElement("img");
    contactImage.setAttribute("src",photo);
    contactImage.setAttribute("heigth",'200px');
    contactImage.setAttribute("width",'200px');
    content.appendChild(contactImage);

    const addressText = document.createElement("p");
    addressText.textContent = "La calle del Sabor 240, Lima - Peru.";
    content.appendChild(addressText);
}

export {setContactContent}