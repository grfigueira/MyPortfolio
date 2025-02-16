document.addEventListener("DOMContentLoaded", () => {
    const calculateAge = () => {
        const [birthYear, birthMonth, birthDay] = [2002, 8, 31];

        const date = new Date();

        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        const currentDay = date.getUTCDate();

        // no birthday yet
        if(currentMonth < birthMonth || (currentMonth + 1 == birthMonth && currentDay < birthDay))
        {
            // print date
            console.log("current year: " + currentYear + " current month: " + currentMonth + " current day: " + currentDay);
            return currentYear - birthYear - 1;
        }
        return currentYear - birthYear;
    };
    
    document.getElementById("age").textContent = calculateAge();
});