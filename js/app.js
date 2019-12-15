console.log('Birtday');

var BirthYear = prompt('Your year pls');
var BirthMonths = prompt('Your month pls, by letters');
var BirthDay = prompt('Your day pls');
var Todaydate = new Date();
const months = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
}

var date ={
    Year: Todaydate.getFullYear(),
    Month: Todaydate.getMonth(),
    Day: Todaydate.getDate(), 
}

var RealAge = date.Year - BirthYear;

if (months[BirthMonths] < date.Month) {
    alert('Your age is:' + RealAge);
} else if (months[BirthMonths] < date.Month) {
    alert('Your age is:' + RealAge -1);
} else {
    if (BirthDay < date.Day) {
        alert('You are ' + RealAge);
    } else if (BirthDay > date.Day) {
        alert ('You are ' + (RealAge - 1));
    } else {
        alert('Happy Birthday Dude :) ' + RealAge);
    }
}
