import env from '../env.json';

const floatPageElems = () => {
    const venomImg = document.querySelector('.venom');
    const hideForm = document.querySelector('.hide-form');
    // const orderTicket = document.querySelector('.order-ticket');
    const formHeight = hideForm.offsetHeight;

    setTimeout(() => {
        venomImg.classList.add('venom-active');
        hideForm.classList.add('hide-form-active');
        hideForm.style.height = `${formHeight}px`;
        // orderTicket.style.height = `${formHeight - 30}px`;
    }, env.floatTimer);
}
export default floatPageElems;