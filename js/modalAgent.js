//***************** Modal agent *****************
//*********************************************
export const modalAgent = () => {
    // get elements for float modal agent
    const hideForm = document.querySelector('.hide-form'),
        orderTicket = document.querySelector('.order-ticket'),
        orderTrigger = document.querySelector('.order-trigger'),
        orderTicketForm = document.querySelector('.order-ticket__form'),
        formWrapper = document.querySelector('.order-ticket__form-wrapper'),
        preloaderWrapper = document.querySelector('.order-ticket__preloader-wrapper'),
        thanksWrapper = document.querySelector('.success-wrapper'),
        thanksName = document.querySelector('.order-ticket__thanks-name'),
        thanksCity = document.querySelector('.order-ticket__thanks-city'),
        orderTicketTitle = document.querySelector('.order-ticket__title'),
        orderTicketDescription = document.querySelector('.order-ticket__description'),
        origOrderTicketTitle = orderTicketTitle.textContent,
        origOrderTicketDescription = orderTicketDescription.textContent;

    // float form
    const heightForm = orderTicket.offsetHeight; //478px
    setTimeout(() => {
        hideForm.style.bottom = `-${heightForm}px`;
        orderTicket.style.height = `${heightForm}px`;
    }, 2000);
    // preloader
    const showPreloader = () => {
        formWrapper.style.display = 'none';
        preloaderWrapper.style.display = 'block';
    };
    // reset error
    const resetError = () => {
        orderTrigger.removeEventListener('click', resetError);
        hideForm.classList.remove('hide-form-active');
        setTimeout(() => {
            orderTicketTitle.textContent = origOrderTicketTitle;
            orderTicketDescription.textContent = origOrderTicketDescription;
        }, 5000);
    };
    // show error send
    const showError = ({
        name,
        surname
    }) => {
        preloaderWrapper.style.display = 'none';
        formWrapper.style.display = 'flex';
        orderTicketTitle.textContent = `Очень жаль, ${name} ${surname}!`;
        orderTicketDescription.textContent = `Произошла ошибка отправки. Попробуйте позже.`;
        setTimeout(resetError, 10000);
        orderTrigger.addEventListener('click', resetError);
    };
    // full reset form
    const resetForm = () => {
        hideForm.classList.remove('hide-form-active');
        orderTrigger.removeEventListener('click', resetForm);
        setTimeout(() => {
            thanksWrapper.style.display = 'none';
            formWrapper.style.display = 'flex';
            orderTicketForm.reset();
            orderTicketForm.querySelectorAll('label').forEach(label =>
                label.classList.remove('order-ticket__label-focus'));
        }, 500)

    };
    // show success send
    const showThanks = ({
        name,
        surname,
        city
    }) => {
        formWrapper.style.display = 'none';
        preloaderWrapper.style.display = 'none';
        thanksWrapper.style.display = 'block';
        thanksName.textContent = `${name} ${surname}`;
        thanksCity.textContent = city;
        setTimeout(resetForm, 10000);
        orderTrigger.addEventListener('click', resetForm);
    };
    // send user data
    const sendData = (data) => {
        fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': ' application/json; charset=UTF-8'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    showThanks(data);
                } else {
                    showError(data);
                    throw new Error(response.status);
                }
            })
            .catch(err => {
                console.error(err)
            });
    };
    //  create user data
    const createData = () => {
        const formData = new FormData(orderTicketForm);
        const data = {};
        for (const [name, value] of formData) data[name] = value;
        showPreloader();
        sendData(data);
    };
    // float labels
    const floatLabels = e => {
        const label = e.target.labels[0];
        // ??label -> если есть инпуты без него
        (label && e.target.value) ? label.classList.add('order-ticket__label-focus'):
            label.classList.remove('order-ticket__label-focus');
    };
    // event listeners
    orderTrigger.addEventListener('click', () => hideForm.classList.toggle('hide-form-active'));

    orderTicketForm.addEventListener('change', e => floatLabels(e));

    orderTicketForm.addEventListener('submit', e => {
        e.preventDefault();
        createData();
    });
};