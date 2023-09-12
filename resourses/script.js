document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();
    const currentUTCTime = Date.now();

    const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    dayOfTheWeekElement.textContent = `Current Day of the Week: ${daysOfWeek[currentDay]}`;
    utcTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;
});
