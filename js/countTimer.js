//***************** Count timer ******************
//*********************************************
// timer

export const countTimer = (deadline) => {
    //get timer elements
    const timer = document.querySelector('.timer'),
        timerNumbers = document.querySelector('.timer-numbers'),
        timerHours = document.getElementById('timer-hours'),
        timerMinutes = document.getElementById('timer-minutes'),
        timerSeconds = document.getElementById('timer-seconds'),
        timerDays = document.getElementById('timer-days');

    const dateMap = new Map();
    let timeRemaining = 0;
    // show time
    const showTime = () => {
        timerHours.textContent = dateMap.get('hours');
        timerMinutes.textContent = dateMap.get('minutes');
        timerSeconds.textContent = dateMap.get('seconds');
        timerDays.textContent = dateMap.get('days');
        timer.style.visibility = 'visible';
    };
    // correct 0 of show time
    const correctZero = () => {
        dateMap.forEach((item, key) => { // 0 вначале
            (item < 10) && dateMap.set(key, `0${item}`);
        });
    };
    // set timer
    const setTimer = () => {
        dateMap.set('seconds', Math.floor(timeRemaining % 60)); // остаток от деления на 60
        dateMap.set('minutes', Math.floor((timeRemaining / 60) % 60)); // снова остаток от деления
        dateMap.set('hours', Math.floor((timeRemaining / 60 / 60) % 24));
        dateMap.set('days', Math.floor(timeRemaining / 60 / 60 / 24));
        correctZero();
        showTime();
    };
    // clear timer
    const clearTimer = () => {
        clearInterval(updateClock);
        dateMap.set('seconds', '00');
        dateMap.set('minutes', '00');
        dateMap.set('hours', '00');
        dateMap.set('days', '00');
        timerNumbers.style.color = '#B30303';
        showTime();
    };
    // check date
    const checkDate = (dateStop, dateNow) => {
        (dateStop < dateNow) ? clearTimer(): setTimer();
    };
    // get time remaining
    const getTimeRemaining = () => {
        const dateStop = new Date(deadline),
            dateNow = new Date();
        timeRemaining = (dateStop - dateNow) / 1000;
        checkDate(dateStop, dateNow);
    };
    // start clock update
    const updateClock = setInterval(timer && getTimeRemaining, 1000);
};