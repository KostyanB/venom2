// show error send
const showErrorSend = ({
    name,
    surname
}) => {
    const hideForm = document.querySelector('.hide-form'),
        orderTrigger = document.querySelector('.order-trigger'),
        formWrapper = document.querySelector('.order-ticket__form-wrapper'),
        preloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper'),
        orderTicketTitle = document.querySelector('.order-ticket__title'),
        orderTicketDescription = document.querySelector('.order-ticket__description');

    preloaderWrapper.style.display = 'none';
    formWrapper.style.display = 'flex';
    orderTicketTitle.textContent = `Очень жаль, ${name} ${surname}!`;
    orderTicketDescription.textContent = `Произошла ошибка отправки. Попробуйте позже.`;

    const resetError = () => {
        const origOrderTicketTitle = orderTicketTitle.textContent;
        const origOrderTicketDescription = orderTicketDescription.textContent;

        orderTrigger.removeEventListener('click', resetError);

        hideForm.classList.remove('hide-form-open');

        setTimeout(() => {
            orderTicketTitle.textContent = origOrderTicketTitle;
            orderTicketDescription.textContent = origOrderTicketDescription;
        }, 5000);
    };

    setTimeout(resetError, 10000);

    orderTrigger.addEventListener('click', resetError);
};
export default showErrorSend;