export { timeLeft }


const timeLeft = function(dueDate) {
    const timer = new Date();
    console.log(timer)
    const timerYear = timer.getFullYear();
    const timerMonth = timer.getMonth();
    const timerDay = timer.getDay();
    const timerHours = timer.getHours();
    const timerMinutes = timer.getMinutes();
    const timerSeconds = timer.getSeconds();

    dueDate = this.dueDate;
    console.log(dueDate)
    const dueYear = dueDate.getFullYear();
    let dueMonth = dueDate.getMonth();
    const dueDay = dueDate.getDay();
    const dueHours = dueDate.getHours();
    const dueMinutes = dueDate.getMinutes();
    const dueSeconds = dueDate.getSeconds();

    let year = dueYear - timerYear

    if(year===1) {dueMonth +=12,year =0}

    return [`year: ${year}, month: ${dueMonth-timerMonth}, day: ${timerDay-dueDay}, hours: ${timerHours-dueHours}, minutes ${timerMinutes-dueMinutes},seconds: ${timerSeconds-dueSeconds}`]
}