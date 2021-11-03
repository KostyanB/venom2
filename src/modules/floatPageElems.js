import env from '../env.json';

const floatPageElems = () => {
    const venomImg = document.querySelector('.venom');
    const hideForm = document.querySelector('.hide-form');

    setTimeout(() => {
        venomImg.classList.add('venom-active');
        hideForm.classList.add('hide-form-active')
    }, env.floatTimer);
}
export default floatPageElems;