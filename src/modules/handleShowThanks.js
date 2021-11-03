// show success send
const handleShowThanks = ({
    name,
    surname,
    city
}) => {
    const hideForm = document.querySelector('.hide-form'),
        orderTicketForm = document.querySelector('.order-ticket__form'),
        orderTrigger = document.querySelector('.order-trigger'),
        formWrapper = document.querySelector('.order-ticket__form-wrapper'),
        preloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper'),
        thanksWrapper = document.querySelector('.success-wrapper'),
        thanksName = document.querySelector('.order-ticket__thanks-name'),
        thanksCity = document.querySelector('.order-ticket__thanks-city');

    formWrapper.style.display = 'none';
    preloaderWrapper.style.display = 'none';
    thanksWrapper.style.display = 'block';
    thanksName.textContent = `${name} ${surname}`;
    thanksCity.textContent = city;

     // full reset form
    const resetForm = () => {
        hideForm.classList.remove('hide-form-open');
        orderTrigger.removeEventListener('click', resetForm);

        setTimeout(() => {
            thanksWrapper.style.display = 'none';
            formWrapper.style.display = 'flex';
            orderTicketForm.reset();
            orderTicketForm.querySelectorAll('label').forEach(label =>
                label.classList.remove('order-ticket__label-focus'));
        }, 500)
    };

    setTimeout(resetForm, 10000);

    orderTrigger.addEventListener('click', resetForm);
};
export default handleShowThanks;