// Fetching DOM elements and storing them in constants
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// Adding a new task when the button is clicked
document.getElementById("btn").addEventListener("click",function(){
    if(inputBox.value === ''){
        alert("you must write something!")
    } else{
        // Appending the task text to a list item (li)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Creating a delete (cross) button for the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
});

// Handling task completion and deletion using event delegation
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});


//Saving tasks to localStorage
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

//Loading saved tasks from localStorage on page load
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();