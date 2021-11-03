const handleShowPreloader = () => {
    const formWrapper = document.querySelector('.order-ticket__form-wrapper'),
        preloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper');

    formWrapper.style.display = 'none';
    preloaderWrapper.style.display = 'block';
};
export default handleShowPreloader;