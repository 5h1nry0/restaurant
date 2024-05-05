const content = document.getElementById("content");
import sushiPhoto from "./sushi.jpg"
import misoPhoto from "./miso.jpg"
import tempuraPhoto from "./tempura.jpg"
import teriyakiPhoto from "./Teriyaki.jpg"
import tonkatsuPhoto from "./tonkatsu.jpg"



const setMenuContent=()=>{
    const headline = document.createElement("h1");
    headline.textContent = "Menu";
    content.appendChild(headline);

    const sushiContainer = document.createElement("div");
    sushiContainer.classList.add("menu")
    content.appendChild(sushiContainer);

        const sushiTitle = document.createElement("h3");
        sushiTitle.textContent = "Sushi Platter - $18.99";
        sushiContainer.appendChild(sushiTitle);

        const sushiImage = document.createElement("img");
        sushiImage.setAttribute("src",sushiPhoto);
        sushiImage.setAttribute("heigth",'200px');
        sushiImage.setAttribute("width",'200px');
        sushiContainer.appendChild(sushiImage);

        const sushiText = document.createElement("p");
        sushiText.textContent = "A selection of fresh nigiri sushi and maki rolls, including tuna, salmon, shrimp, and avocado.Served with pickled ginger, wasabi, and soy sauce.";
        sushiContainer.appendChild(sushiText);

    const tonkatsuContainer = document.createElement("div");
    tonkatsuContainer.classList.add("menu")
    content.appendChild(tonkatsuContainer);
    
        const tonkatsuTitle = document.createElement("h3");
        tonkatsuTitle.textContent = "Tonkatsu - $14.49";
        tonkatsuContainer.appendChild(tonkatsuTitle);

        const tonkatsuImage = document.createElement("img");
        tonkatsuImage.setAttribute("src",tonkatsuPhoto);
        tonkatsuImage.setAttribute("heigth",'200px');
        tonkatsuImage.setAttribute("width",'200px');
        tonkatsuContainer.appendChild(tonkatsuImage);

        const tonkatsuText = document.createElement("p");
        tonkatsuText.textContent = "Crispy breaded and deep-fried pork cutlet. Served with shredded cabbage, tonkatsu sauce, and steamed rice.";
        tonkatsuContainer.appendChild(tonkatsuText);

    const tempuraContainer = document.createElement("div");
    tempuraContainer.classList.add("menu")
    content.appendChild(tempuraContainer);

        const tempuraTitle = document.createElement("h3");
        tempuraTitle.textContent = "Tempura Udon - $15.99";
        tempuraContainer.appendChild(tempuraTitle);

        const tempuraImage = document.createElement("img");
        tempuraImage.setAttribute("src",tempuraPhoto);
        tempuraImage.setAttribute("heigth",'200px');
        tempuraImage.setAttribute("width",'200px');
        tempuraContainer.appendChild(tempuraImage);

        const tempuraText = document.createElement("p");
        tempuraText.textContent = "Thick wheat noodles served in a savory dashi broth. Topped with crispy tempura shrimp and vegetables like sweet potato, zucchini, and bell pepper.";
        tempuraContainer.appendChild(tempuraText);

    const teriyakiContainer = document.createElement("div");
    teriyakiContainer.classList.add("menu")
    content.appendChild(teriyakiContainer);  

        const teriyakiTitle = document.createElement("h3");
        teriyakiTitle.textContent = "Teriyaki Chicken Donburi - $12.99";
        teriyakiContainer.appendChild(teriyakiTitle);

        const teriyakiImage = document.createElement("img");
        teriyakiImage.setAttribute("src",teriyakiPhoto);
        teriyakiImage.setAttribute("heigth",'200px');
        teriyakiImage.setAttribute("width",'200px');
        teriyakiContainer.appendChild(teriyakiImage);

        const teriyakiText = document.createElement("p");
        teriyakiText.textContent = "Grilled chicken marinated in sweet teriyaki sauce. Served over a bowl of steamed Japanese rice and garnished with sesame seeds and green onions.";
        teriyakiContainer.appendChild(teriyakiText);

    const misoContainer = document.createElement("div");
    misoContainer.classList.add("menu")
    content.appendChild(misoContainer);  
    
        const misoTitle = document.createElement("h3");
        misoTitle.textContent = "Miso Soup with Tofu and Seaweed - $4.99";
        misoContainer.appendChild(misoTitle);

        const misoImage = document.createElement("img");
        misoImage.setAttribute("src", misoPhoto);
        misoImage.setAttribute("heigth",'200px');
        misoImage.setAttribute("width",'200px');
        misoContainer.appendChild(misoImage);

        const misoText = document.createElement("p");
        misoText.textContent = "Traditional Japanese soup made with miso paste, tofu cubes, seaweed, and green onions. Light and comforting, perfect as a starter or side dish.";
        misoContainer.appendChild(misoText);
}

export {setMenuContent}