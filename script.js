const button = document.querySelector("#enter");
const input = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const date = document.querySelector("#date");




//button click
const printButtonConfirmation = () => {
    console.log("enter button clicked");
}

input.addEventListener("input", (event) => { //the second argument is passed automatically by the browser, 'event'
    input.innerText = event.target.value; //updating caption variable from value entered in event (text input)
})

button.addEventListener("click", printButtonConfirmation) 


const createAndAppendListItem = (content) => {
    const newListItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newListItem.innerText = content;
    list.appendChild(newListItem);
    newListItem.append(deleteButton);
    deleteButton.addEventListener("click", () => {
        list.removeChild(newListItem);
    });
}


input.addEventListener("change", (event) => {
    const newToDo= event.target.value; 
    createAndAppendListItem(newToDo);
    
})







