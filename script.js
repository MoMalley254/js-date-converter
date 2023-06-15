const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputDate = document.getElementById('inputDate').value;
    const currentDateSpan = document.getElementById('currentDate');

    currentDateSpan.textContent = inputDate;

})
