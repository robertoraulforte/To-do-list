export const uniqueDates = (tasks) => {
    const unique = [];
  
    //**if it doesn't exist task.dateFormat inside array unique add it and if exist don't do anything */
    tasks.forEach((task) => {
      if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
    });
    return unique;
  };
  
  export const orderDates = (dates) => {
    return dates.sort((a, b) => {
      const fistDate = moment(a, "DD/MM/YYYY");
      const secondDate = moment(b, "DD/MM/YYYY");
      return fistDate - secondDate;
    });
  };