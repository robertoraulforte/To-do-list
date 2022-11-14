//**this creates the structure html to add it to DOM */
export default (date) => {
    const dateElement = document.createElement("li");
    dateElement.classList.add("date");
    dateElement.innerHTML = date;
    return dateElement;
  };