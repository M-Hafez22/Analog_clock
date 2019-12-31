import {dateInfo, dayName} from './config';





export const showDateInfo = () =>{
  const  week = [ "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];

  const currentDate = new Date(),
        dayDate = currentDate.getDate(),
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear(),
        weekDay = week[currentDate.getDay()];

        dayName.textContent = weekDay;
        dateInfo.textContent = `${dayDate}/${month}/${year}`;
  console.log(weekDay);
}