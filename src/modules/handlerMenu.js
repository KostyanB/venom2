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
        console.log('e.target: ', e.target);
            (e.target.closest('.menu-button')) && openMenu();
            (e.target.closest('.menu-button-close') || e.target === navMenuWrapper) && closeMenu();
    });
};
export default handlerMenu;
