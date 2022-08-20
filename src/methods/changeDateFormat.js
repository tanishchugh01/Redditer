export default function changeDateFormat(dateNum) {
  const myDate = new Date(dateNum * 1000);
  const year = myDate.getFullYear();
  var monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthList[myDate.getMonth()];
  const date = myDate.getDate();

  return `${date} ${month}, ${year}`;
}