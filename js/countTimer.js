//***************** Count timer ******************
//*********************************************
export const countTimer = (deadline) => {
    // get timer elements
    const timer = document.querySelector('.timer'),
        timerHours = document.getElementById('timer-hours'),
        timerMinutes = document.getElementById('timer-minutes'),
        timerSeconds = document.getElementById('timer-seconds'),
        timerDays = document.getElementById('timer-days');

    const dateMap = new Map(),
        textBase = {
            'days': ['день', 'дня', 'дней'],
            'hours': ['час', 'часа', 'часов'],
        };
    let timeRemaining = 0;
    // show time
    const showTime = () => {
        timerHours.textContent = dateMap.get('hours');
        timerMinutes.textContent = dateMap.get('minutes');
        timerSeconds.textContent = dateMap.get('seconds');
        timerDays.textContent = dateMap.get('days');
        timer.style.visibility = 'visible';
    };
    // correction timer text
    const correctText = (item, key) => {
        const textField = document.querySelector(`.${key}-text`);
        const texts = textBase[key]; // key -> дни или часы в базе
        if (item >= 11 && item <= 19) {
            textField.textContent = texts[2];
        } else {
            const value = Math.floor(item % 10);
            textField.textContent = (value === 1) ? texts[0] : (value >= 2 && value <= 4) ? texts[1] : texts[2];
        }
    };
    // correction 0 of show time
    const correctZero = () => {
        dateMap.forEach((item, key) => {
            (key === 'hours' || key === 'days') && correctText(item, key);
            (item < 10) && dateMap.set(key, `0${item}`);// добавл. 0 вначале
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
        timer.style.color = '#B30303';
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