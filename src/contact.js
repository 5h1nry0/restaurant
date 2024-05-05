const content = document.getElementById("content");
import photo from "./google-maps-22-1200x675.jpg"

const setContactContent=()=>{
    const headline = document.createElement("h1");
    headline.textContent = "Contact us";
    content.appendChild(headline);

    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("phone")
    content.appendChild(phoneContainer);  

        const phoneTitle = document.createElement("h2");
        phoneTitle.textContent = "Phones";
        phoneContainer.appendChild(phoneTitle);

        const reservesContainer = document.createElement("div");
        reservesContainer.classList.add("tlf")
        phoneContainer.appendChild(reservesContainer);  

            const phoneReserves = document.createElement("h3");
            phoneReserves.textContent = "For reserves";
            reservesContainer.appendChild(phoneReserves);

            const phoneReservesText = document.createElement("p");
            phoneReservesText.textContent = "+511 2415559";
            reservesContainer.appendChild(phoneReservesText);

        const inquiriesContainer = document.createElement("div");
        inquiriesContainer.classList.add("tlf")
        phoneContainer.appendChild(inquiriesContainer); 

            const phoneInquiries = document.createElement("h3");
            phoneInquiries.textContent = "For other inquiries";
            inquiriesContainer.appendChild(phoneInquiries);

            const phoneInquiriesText = document.createElement("p");
            phoneInquiriesText.textContent = "+51 959444091";
            inquiriesContainer.appendChild(phoneInquiriesText);

    const addressTitle = document.createElement("h2");
    addressTitle.textContent = "Find us here";
    content.appendChild(addressTitle);

    const contactImage = document.createElement("img");
    contactImage.setAttribute("src",photo);
    contactImage.setAttribute("heigth",'auto');
    contactImage.setAttribute("width",'400px');
    content.appendChild(contactImage);

    const addressText = document.createElement("p");
    addressText.textContent = "La calle del Sabor 240, Lima - Peru.";
    content.appendChild(addressText);
}

export {setContactContent}