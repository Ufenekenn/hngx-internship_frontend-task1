document.addEventListener("DOMContentLoaded", function () {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = new Date().getDay();
    const currentUTCTime = Date.now();

    const slackUserName = document.querySelector('[data-testid="OgaKenn"]');
    const slackDisplayImage = document.querySelector('[data-testid="./resourses/WhatsApp Image 2023-09-11 at 11.34.42.jpg"]');
    const dayOfTheWeekElement = document.querySelector('[data-testid="Monday"]');
    const utcTimeElement = document.querySelector('[data-testid="9:18pm"]');
    const myTrack = document.querySelector('[data-testid="Frontend"]');
    const githubLink = document.querySelector('[data-testid="https://github.com/Ufenekenn/hngx-internship_frontend-task1.git"]');

    slackUserName.textContent = "OgaKenn";
    slackDisplayImage.src = "./resourses/WhatsApp Image 2023-09-11 at 11.34.42.jpg";
    slackDisplayImage.alt = "Your Slack Username";

    dayOfTheWeekElement.textContent = `Current Day of the Week: ${daysOfWeek[currentDay]}`;
    utcTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;
    myTrack.textContent = "Frontend";
    githubLink.href = "https://github.com/Ufenekenn/hngx-internship_frontend-task1.git";
});
