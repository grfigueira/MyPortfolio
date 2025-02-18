document.addEventListener("DOMContentLoaded", () => {
    const calculateAge = () => {
        const [birthYear, birthMonth, birthDay] = [2002, 8, 31];

        const date = new Date();

        const [currentYear, currentMonth, currentDay] = [date.getFullYear(), date.getMonth(), date.getUTCDate()];

        // no birthday yet
        if (currentMonth < birthMonth || (currentMonth + 1 == birthMonth && currentDay < birthDay)) {
            console.log("current year: " + currentYear + " current month: " + currentMonth + " current day: " + currentDay);
            return currentYear - birthYear - 1;
        }
        return currentYear - birthYear;
    };

    document.getElementById("age").textContent = calculateAge();
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});

/******************************************************************************
*                   Logic from Nelson Rodrigues
*              https://codepen.io/nelsonr/pen/WNQaZPb
******************************************************************************/

