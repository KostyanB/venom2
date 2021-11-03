import showTimer from './showTimer';
import env from '../env.json';

const countTimer = () => {
    const {
        deadline,
        beforeColor,
        afterColor
    } = env
    const timer = document.querySelector('.timer');
    const dateMap = new Map(),
        dateStop = new Date(deadline);

    dateMap.set('deadlineDay', dateStop.getDate());
    dateMap.set('deadlineMonth', dateStop.getMonth());
    dateMap.set('deadlineYear', dateStop.getFullYear());

    // let timeRemaining = 0;

    // set timer
    const setTimer = (timeRemaining) => {
        dateMap.set('seconds', Math.floor(timeRemaining % 60));
        dateMap.set('minutes', Math.floor((timeRemaining / 60) % 60));
        dateMap.set('hours', Math.floor((timeRemaining / 60 / 60) % 24));
        dateMap.set('days', Math.floor(timeRemaining / 60 / 60 / 24));
        // dateMap.set('deadlineText', 'до мировой премьеры');
        showTimer(dateMap);
    };

    // clear timer
    const clearTimer = () => {
        clearInterval(updateClock);
        dateMap.set('seconds', '00');
        dateMap.set('minutes', '00');
        dateMap.set('hours', '00');
        dateMap.set('days', '00');
        // dateMap.set('deadline', 'премьера состоялась');
        timer.style.color = '#B30303';
        showTimer(dateMap);
    };

    // check date
    const checkDate = (dateNow, timeRemaining) => {
        // (dateStop < dateNow) ? clearTimer() : setTimer();
        if (dateStop > dateNow) {
            dateMap.set('deadlineText', 'до мировой премьеры');
            timer.style.color = beforeColor;
        } else {
            dateMap.set('deadlineText', 'прошло после премьеры');
            timer.style.color = afterColor;
        }
        setTimer(timeRemaining);
    };

    // get time remaining
    const getTimeRemaining = () => {
        const dateNow = new Date();
        const timeRemaining = Math.abs((dateStop - dateNow) / 1000);
        checkDate(dateNow, timeRemaining);
    };

    // start clock update
    const updateClock = setInterval(timer && getTimeRemaining, 1000);
};
export default countTimer;