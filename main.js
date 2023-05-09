let bloque = document.querySelector(".bloque");
let menu = document.querySelector(".menu");

document.addEventListener("DOMContentLoaded", () => {
    if (screen.width <= 568 ) {
        bloque.style.display = "none";
        createList()
    }
    console.log("pantalla chica");
    function createList() {
        let p = document.createElement("p");
        p.textContent = "home";
        p.className = "bloque_list";
        p.classList.add("paragraph_nav")

        let p2 = document.createElement("p");   
        p2.textContent = "productos";
        p2.className = "bloque_list2";
        p2.classList.add("paragraph_nav")

        let p3 = document.createElement("p");
        p3.textContent = "productos";
        p3.className = "bloque_list3";
        p3.classList.add("paragraph_nav")

        menu.appendChild(p);
        menu.appendChild(p2);
        menu.appendChild(p3);
    }
});