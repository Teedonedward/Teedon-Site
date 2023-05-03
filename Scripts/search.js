let products = {
    data: [
        {
            designTitle: "Container House",
            page: "../pages/container_house.html",
            category: "1 Storey",
            price: "149,999",
            image: "../images/designs/Container_home/container_house1.jpg",
        },
        {
            designTitle: "Classic Bungalow",
            page: "../pages/classic_bungalow.html",
            category: "Bungalow",
            price: "99,999",
            image: "../images/designs/classic_bungalow.jpg",
        },
        {
            designTitle: "Penthouse Suite",
            page: "../pages/penthouse_suite.html",
            category: "1 Storey",
            price: "249,999",
            image: "../images/designs/french_quatres.jpg",
        },
        {
            designTitle: "Deluxe",
            page: "../pages/deluxe.html",
            category: "1 Storey",
            price: "349,999",
            image: "../images/designs/great_room.jpg",
        },
        {
            designTitle: "Health center",
            page: "../pages/health_center.html",
            category: "Bungalow",
            price: "349,999",
            image: "../images/designs/health_center.jpg",
        },
        {
            designTitle: "Modern country home",
            page: "../pages/modern_country_home.html",
            category: "Bungalow",
            price: "199,999",
            image: "../images/designs/Modern_country_home/modern_country_home_approach-view.jpg",
        },
        {
            designTitle: "Right-Left",
            page: "../pages/right_left.html",
            category: "1 Storey",
            price: "499,999",
            image: "../images/designs/Right-left/right-left.jpg",
        },
        {
            designTitle: "Simple contemprorary",
            page: "../pages/simple_contemprorary",
            category: "Bungalow",
            price: "249,999",
            image: "../images/designs/simple_contemporary.jpg",
        },
        {
            designTitle: "Open windows house",
            page: "../pages/open_windows.html",
            category: "Bungalow",
            price: "199,999",
            image: "../images/designs/open_windows.jpg",
        },
        {
            designTitle: "Studio apps",
            page: "../pages/studion_app.html",
            category: "1 Storey",
            price: "449,999",
            image: "../images/designs/studio_app.jpg",
        },
        {
            designTitle: "Masonry house",
            page: "../pages/masonry.html",
            category: "1 Storey",
            price: "349,999",
            image: "../images/designs/masonry.jpg",
        },
        {
            designTitle: "Monopitched",
            page: "../pages/monopitched.html",
            category: "Bungalow",
            price: "199,999",
            image: "../images/designs/monopitched.jpg",
        },
        {
            designTitle: "Duplex",
            page: "../pages/duplex.html",
            category: "1 Storey",
            price: "249,999",
            image: "../images/designs/Duplex/duplex.jpg",
        },
    ],
};

for (let i of products.data) {
    let design = document.createElement("div");
    design.classList.add("design", "i.category");

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
    document.getElementById("designed").appendChild(design);
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let designs = document.querySelectorAll(".design");
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