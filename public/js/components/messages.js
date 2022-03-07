// Setting up the html
/* const main = document.querySelector("main");
const infoContainer = document.createElement("div");
main.append(infoContainer);
const infoDiv = document.createElement("div");
infoDiv.classList.add("info");
infoContainer.append(infoDiv); */

// Setting the innerHTML of the message
const error = "Oh no. Something really bad went wrong here.... Try again later";
const success = "Oh yes. everything went well!";
const alert = "THIS IS AN ALERT FROM THE CREATOR";
const warning = "THIS IS A WARNING";

export function displayMessage(type){
    switch(type){
      case 'error':      
        newDiv.classList.add("error");
        newDiv.innerHTML += `<p>${error}</p>`;
        break;
   
      case 'success':
        infoContainer.style.display = "flex";
        newDiv.classList.add("success");
        newDiv.innerHTML += `<p>${success}</p>`;
        break;
  
      case 'alert':
        infoContainer.style.display = "flex";
        newDiv.classList.add("alert");
        newDiv.innerHTML += `<p>${alert}</p>`;
  
      case 'warning':
        infoContainer.style.display = "flex";
        newDiv.classList.add("warning");
        newDiv.innerHTML += `<p>${warning}</p>`;
        break;
    }
  }
