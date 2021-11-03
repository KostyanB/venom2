import sendUserData from './sendUserData';
import handleShowPreloader from './handleShowPreloader';

const modalAgent = () => {
    // get elements for float modal agent
    const hideForm = document.querySelector('.hide-form'),
        orderTrigger = document.querySelector('.order-trigger'),
        orderTicketForm = document.querySelector('.order-ticket__form');

        //  create user data
    const createData = () => {
        const formData = new FormData(orderTicketForm);
        const data = {};
        for (const [name, value] of formData) data[name] = value;
        handleShowPreloader();
        sendUserData(data);
    };

    // event listeners
    orderTrigger.addEventListener('click', () => hideForm.classList.toggle('hide-form-open'));

    orderTicketForm.addEventListener('submit', e => {
        e.preventDefault();
        createData();
    });
};
export default modalAgent;