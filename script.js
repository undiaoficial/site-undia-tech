const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// fecha ao clicar em um item
document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

// volta ao comportamento desktop
window.addEventListener("resize", () => {

    if(window.innerWidth > 768){

        menu.classList.remove("active");

    }

});

