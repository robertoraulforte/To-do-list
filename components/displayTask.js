import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

//**const taskList = localStorage.getItem("tasks"); this return an object json and we have to swith that to an obj javascript and we get this adding JSON.parse() */
//**In the case is comes null we use || [] */
//**for Each element inside the array we want to iterate, in this case task */
export const displayTasks = () => {
  const list = document.querySelector('[data-list]');
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const dates = uniqueDates(taskList);
  orderDates(dates);

  dates.forEach((date) => {
    const dateMoment = moment(date,'DD/MM/YYYY');
    list.appendChild(dateElement(date))
    taskList.forEach((task) => {
      const taskDate = moment(task.dateFormat,'DD/MM/YYYY');
      const diff = dateMoment.diff(taskDate);
      if( diff === 0 ){
        list.appendChild(createTask(task));
      }
      });
  });
  
};