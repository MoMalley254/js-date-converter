const form = document.getElementById('form');
const formattedDateSpan = document.getElementById('newDate');
const formattedDateSpanDos = document.getElementById('newDateDos');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputDate = document.getElementById('inputDate').value;
    const currentDateSpan = document.getElementById('currentDate');

    currentDateSpan.textContent = inputDate;


    const firstFormatBtn = document.getElementById('formatUno').addEventListener('click', () => {
        firstFormat(inputDate);
    })

    const secondFormatBtn = document.getElementById('formatDos').addEventListener('click', () => {
        secondFormat(inputDate); // Pass the inputDate as a parameter to secondFormat
    })
});

function firstFormat(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth(); // Months are zero-based
    const year = date.getFullYear();

    // Array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // Function to get the appropriate superscript for the day
    function getDaySuperscript(day) {
        if (day >= 11 && day <= 13) {
            return "th";
        } else {
            const lastDigit = day % 10;
            switch (lastDigit) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        }
    }

    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = monthNames[month];
    const daySuperscript = getDaySuperscript(day);
    
    let formattedDate = `${formattedDay}${daySuperscript}  ${formattedMonth}, ${year}`;

    formattedDateSpan.textContent = formattedDate;
}


function secondFormat(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Pad single-digit day, month, hours, and minutes with leading zeros
    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    let formattedDate = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`;

    formattedDateSpanDos.textContent = formattedDate;
}
