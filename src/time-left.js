import { formatDistanceToNowStrict } from "date-fns";
import { intervalToDuration } from "date-fns";
export { distanceBetweenDates }

// function formatDistanceToNowStrict(
//     date: string | number | Date,
//     options?: FormatDistanceToNowStrictOptions
//   ): string

// If today is 28 January 2015, what is the distance to 1 January 2015, in months, rounded up??

// const result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
//   unit: 'month',
//   roundingMethod: 'ceil'
// })
// //=> '1 month'

const distanceBetweenDates = (dueDate) => intervalToDuration ({
    start: new Date(),
    end: dueDate
  });
  //=> { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }

const distanceYear = (dueDate) => formatDistanceToNowStrict(dueDate, {
    unit: 'year',
    roundingMethod: 'floor'
})

const distanceMonth = (dueDate) => formatDistanceToNowStrict(dueDate, {
    unit: 'month',
    roundingMethod: 'floor'
})

const distanceDay = (dueDate) => formatDistanceToNowStrict(dueDate, {
    unit: 'day',
    roundingMethod: 'floor'
})


// const timeLeft = function(dueDate) {
//     const timer = new Date();
//     const timerYear = timer.getFullYear();
//     const timerMonth = timer.getMonth();
//     const timerDay = timer.getDay();
//     const timerHours = timer.getHours();
//     const timerMinutes = timer.getMinutes();
//     const timerSeconds = timer.getSeconds();
//     console.log(`${timerYear}, ${timerMonth}, ${timerDay}, ${timerHours} hour, ${timerMinutes} minute, ${timerSeconds} seconds`)
    
    
    // const dueYear = dueDate.getFullYear();
    // let dueMonth = dueDate.getMonth();
    // const dueDay = dueDate.getDay();
    // const dueHours = dueDate.getHours();
    // const dueMinutes = dueDate.getMinutes();
    // const dueSeconds = dueDate.getSeconds();
    // console.log(`${dueYear}, ${dueMonth}, ${dueDay}, ${dueHours} hour, ${dueMinutes} minute, ${dueSeconds} seconds`)

    // let year,month,day,hour,minute,second

    // if(year>0) {dueMonth += year * 12,year =0}
    // timer 2024, 11, 3, 19 hour, 3 minute, 48 seconds
    // due 2025, 2, 6, 0 hour, 0 minute, 0 seconds

    // 1 8 13 3 
    // if(2025>2024 && 2 > 11) {
    //     year = dueYear - timerYear
    // } else {
    //     year = 0
    // }

    // if (2>11 && 6>3) {
    //     month = dueMonth - timerMonth
    // } else {
    //     month = dueMonth +12 - timerMonth
    // }

    // if (6>3) {
    //     day = dueDay - timerDay
    // } else {
    //     day =0
    // }


//     If you wish to learn more about how to calculate the days between two dates by hand, follow these steps. For example, if you were born on September 5th, 1970, and you want to work out how old you are in days as of June 5th, 2022.

// Subtract the start year from the end year. Since September 2022 has not yet arrived, we know the last complete year is September 2021, so we subtract: 2021 − 1970 = 51.

// Convert the result to days: Each year is 365.25 days (we include the .25 to cater for leap years). The number of days in 51 years would be 365.25 × 51 = 18,627.75 days.
// Find the number of months from September 2021 to June 2022.

// Month 12 − Month 9 = 3 months in 2021.
// Month 6 − Month 1 + 1 = 6.
// So the number of months is 9.
// Multiply the average number of days in a month by our 9 months: 365.25/12 × 9 = 273.9375 days.
// Add the total number of days together and round the final answer: 18,627.75 + 273.9375 = 18,901.6875.

// Round down to get 18,901 — the number of days, not including the end date. Round up (18,902) to include the end date.
//     January - 31 days
//     February - 28 days in a common year and 29 days in leap years
    // The year must be evenly divisible by 4;
    // If the year can also be evenly divided by 100, it is not a leap year;
    // unless...
    // The year is also evenly divisible by 400. Then it is a leap year.
//     March - 31 days
//     April - 30 days
//     May - 31 days
//     June - 30 days
//     July - 31 days
//     August - 31 days
//     September - 30 days
//     October - 31 days
//     November - 30 days
//     December - 31 days

//     return [`${year} year, ${month} month, ${dueDay-timerDay} day, ${dueHours-timerHours} hour, ${dueMinutes-timerMinutes} minute, ${dueSeconds-timerSeconds} seconds`]
// }