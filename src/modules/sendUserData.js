import env from '../env.json';
import handleShowThanks from './handleShowThanks';
import handleShowErrorSend from './handleShowErrorSend';
    // send user data
const sendUserData = (data) => {
    fetch(env.backendUrl, {
            method: 'POST',
            headers: {
                'Content-type': ' application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                handleShowThanks(data);
            } else {
                handleShowErrorSend(data);
                throw new Error(response.status);
            }
        })
        .catch(err => {
            console.error(err)
        });
};
export default sendUserData;