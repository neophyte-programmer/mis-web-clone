var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
var month = today.getMonth() + 1;
var monthlist = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var year = today.getFullYear();
var date = today.getDate();
var time = today.getHours() + ":" + today.getMinutes();

document.getElementById("date").innerHTML =
  daylist[day] + ", " + date + " " + monthlist[month - 1] + ", " + year + ". <br>" + time;
