let products = {
    data: [
        {
            designTitle: "Kolapo House",
            page: "../pages/Kolapo_house.html",
            category: "1 Storey",
            price: "90,000,000",
            image: "../images/sale/1/IMG-20230628-WA0071.jpg",
        },
        {
            designTitle: "Contemporary Duolex 1",
            page: "../pages/Contemporary_Duolex_1.html",
            category: "1 Storey",
            price: "80,000,000",
            image: "../images/sale/2/IMG-20230629-WA0003.jpg",
        },
        {
            designTitle: "Contemporary Duolex 2",
            page: "../pages/Contemporary_Duolex_1.html",
            category: "1 Storey",
            price: "85,000,000",
            image: "../images/sale/3/IMG-20230629-WA0006.jpg",
        },
        {
            designTitle: "Bungalow",
            page: "../pages/Bungalow.html",
            category: "Bungalow",
            price: "50,000",
            image: "../images/sale/4/WhatsApp50.jpg",
        },
    ],
};

for (let i of products.data) {
    let design = document.createElement("div");
    design.classList.add("sale", "i.category");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    design.appendChild(image);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("a");
    name.setAttribute("href", i.page);
    name.classList.add("title");
    name.innerText = i.designTitle.toLocaleUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.classList.add("price-tag");
    price.innerText = "#" + i.price;
    container.appendChild(price);

    design.appendChild(container);
    document.getElementById("for-sell").appendChild(design);
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let designs = document.querySelectorAll(".sale");
    let introtText = document.getElementsByClassName("intro-text");
    let carouselWrapper = document.getElementsByClassName("carousel-wrapper");  
    let thingsWeDo = document.getElementsByClassName("things_we_do");
    
    elements.forEach((element, index) => {
        if(element.innerText.includes(searchInput.toUpperCase())) {
            designs[index].classList.remove("hide");
        }
        else {
            designs[index].classList.add("hide");
            introtText[index].classList.add("hide");
            carouselWrapper[index].classList.add("hide");
            thingsWeDo[index].classList.add("hide");
        }
    });
});