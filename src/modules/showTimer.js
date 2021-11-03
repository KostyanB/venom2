import declOfNum from './declOfNum';

const showTimer = (dateMap) => {
    const timer = document.querySelector('.timer'),
        timerHours = document.getElementById('timer-hours'),
        timerMinutes = document.getElementById('timer-minutes'),
        timerSeconds = document.getElementById('timer-seconds'),
        timerDays = document.getElementById('timer-days'),
        daysText = document.getElementById('days-text'),
        hoursText = document.getElementById('hours-text'),
        textDeadline = document.getElementById('text-deadline'),
        dayDeadline = document.getElementById('day-deadline'),
        monthDeadline = document.getElementById('month-deadline'),
        yearDeadline = document.getElementById('year-deadline');

    const  textBase = {
        'days': ['день', 'дня', 'дней'],
        'hours': ['час', 'часа', 'часов'],
        'months': ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    };

    // секунды в формате '00'
    timerSeconds.textContent = dateMap.get('seconds')
        .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    // минуты в формате '00'
    timerMinutes.textContent = dateMap.get('minutes')
        .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    // часы
    const hoursValue = dateMap.get('hours')
    timerHours.textContent = hoursValue;
    // дни
    const daysValue = dateMap.get('days');
    timerDays.textContent = daysValue;
    // текст в зависимости от значения часов/дней
    hoursText.textContent = declOfNum(hoursValue, textBase.hours);
    daysText.textContent = declOfNum(daysValue, textBase.days);
    // текст дедлайна
    textDeadline.textContent = dateMap.get('deadlineText');
    dayDeadline.textContent = dateMap.get('deadlineDay');
    monthDeadline.textContent = textBase.months[dateMap.get('deadlineMonth')];
    yearDeadline.textContent = `${Math.floor(dateMap.get('deadlineYear') % 1000)}г.`;
    // делаем таймер видимым
    timer.style.visibility = 'visible';
};
export default showTimer;