const handlerMenu = () => {
    const menuButton = document.querySelector(".menu-button"),
        menu = document.querySelector(".nav-menu"),
        menuButtonClose = document.querySelector(".menu-button-close"),
        navMenuWrapper = document.querySelector('.nav-menu');

    const openMenu = () => {
        menu.classList.add("is-open");
        menuButtonClose.classList.add("is-active");
    };
    const closeMenu = () => {
        menu.classList.remove("is-open");
        menuButtonClose.classList.remove("is-active");
    };
    document.addEventListener("click", e => {
            (e.target === menuButton) && openMenu();
            (e.target === menuButtonClose || e.target === navMenuWrapper) && closeMenu();
    });
};
export default handlerMenu;
