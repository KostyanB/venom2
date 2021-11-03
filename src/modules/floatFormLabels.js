const floatFormLabels = () => {
    const orderTicketForm = document.querySelector('.order-ticket__form');
     // float labels
    const floatLabels = e => {
        const label = e.target.labels[0];
        // ??label -> если есть инпуты без него
        (label && e.target.value) ? label.classList.add('order-ticket__label-focus'):
            label.classList.remove('order-ticket__label-focus');
    };

    orderTicketForm.addEventListener('change', e => floatLabels(e));
};
export default floatFormLabels;