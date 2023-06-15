const form = document.getElementById('form');
const formattedDateSpan = document.getElementById('newDate');
const formattedDateSpanDos = document.getElementById('newDateDos');
const formattedDateSpanTres = document.getElementById('newDateTres');
const formattedDateSpanQuatro = document.getElementById('newDateQuatro');
const formattedDateSpanCinco = document.getElementById('newDateCinco');

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

    const thirdFormatBtn = document.getElementById('formatTres').addEventListener('click', () => {
        thirdFormat(inputDate); // Pass the inputDate as a parameter to secondFormat
    })

    const fourthFormatBtn = document.getElementById('formatQuatro').addEventListener('click', () => {
        fourthFormat(inputDate); // Pass the inputDate as a parameter to secondFormat
    })

    const fifthFormatBtn = document.getElementById('formatCinco').addEventListener('click', () => {
        fifthFormat(inputDate); // Pass the inputDate as a parameter to secondFormat
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

    // Pad single-digit day, month, hours, and minutes with leading zeros
    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');

    let formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

    formattedDateSpanDos.textContent = formattedDate;
}

function thirdFormat(dateString) {
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

    formattedDateSpanTres.textContent = formattedDate;
}


function fourthFormat(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const formattedMonth = months[month - 1];

    const formattedDate = `${dayOfWeek}, ${formattedMonth} ${day}, ${year}`;
      

    formattedDateSpanQuatro.textContent = formattedDate;
}


function fifthFormat(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');

    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

    formattedDateSpanCinco.textContent = formattedDate;
}
