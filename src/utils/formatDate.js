module.exports = stringDate => {
  let monthNames = [
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
  let date = new Date(stringDate);
  let day = date.getDate() + 1;
  let month = date.getMonth();
  let year = date.getFullYear();
  console.log(day);
  return monthNames[month] + " " + day + ", " + year;
};
