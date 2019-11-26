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

  let day = date.getDate() ;

  let month = date.getMonth();
  let year = date.getFullYear();

  return monthNames[month] + " " + day + ", " + year;
};
