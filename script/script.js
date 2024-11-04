const accordions = document.querySelectorAll("._accordion");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const panel = accordion.nextElementSibling;
        const chevronDown = accordion.querySelector(".fa-chevron-down")
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null; 
            panel.style.paddingTop = null;
            panel.style.paddingBottom = null;
            chevronDown.style.rotate = 0 + "deg";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
            panel.style.paddingTop = 24 + "px";
            panel.style.paddingBottom = 24 + "px";
            chevronDown.style.rotate = 180 + "deg"
        }
    })
});

const dropdownButtons = document.querySelectorAll("._dropdown-btn");

dropdownButtons.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("active");
        console.log('halo')
    })
});

const hamburger = document.getElementById("hamburger");
const closeNav = document.getElementById("close-nav")
const navigationBar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navigationBar.classList.add("translate-x-0");
    navigationBar.classList.remove("translate-x-full");
})

closeNav.addEventListener("click", () => {
    navigationBar.classList.remove("translate-x-0");
    navigationBar.classList.add("translate-x-full");
})
