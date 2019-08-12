window.onload = () => {
    let menuActive = false;
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuToggle = document.querySelector(".mobile-menu label");
    menuToggle.addEventListener("click", () => {
        menuActive = !menuActive;
        menuToggle.innerHTML = menuActive
            ? `<i class="fas fa-2x fa-times"></i>`
            : `<i class="fas fa-2x fa-bars"></i>`;
        switch (menuActive) {
            case true:
                mobileMenu.classList.add("fall-down");
                break;
            case false:
                mobileMenu.classList.remove("fall-down");
                break;
        }
    });
};
