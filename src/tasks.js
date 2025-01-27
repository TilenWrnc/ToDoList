import { currentProject } from "./projects.js";

const newTaskButton = document.querySelector(".new-task-button");
const closePopUpButton = document.querySelector(".close-popup-button");
const newTaskPopUp = document.querySelector("#new-task-modal");

newTaskButton.addEventListener("click", () => {
    newTaskPopUp.classList.remove("new-task-modal-closed");
})

closePopUpButton.addEventListener("click", () => {
    newTaskPopUp.classList.add("new-task-modal-closed");
})

const newTaskForm = document.querySelector(".new-task-form");
const taskTitle = document.querySelector("#title");
const taskDescription = document.querySelector("#description");
const taskDueDate = document.querySelector("#due-date");
const taskPriority = document.querySelector("#priority");
export const taskContainer = document.querySelector(".task-container");

export const taskArray = []; 

class ToDoItem {
    constructor(title, description, dueDate, priority, category) {
        this.title = title;
        this.description = description;
        this.dueDate= dueDate;
        this.priority = priority;
        this.category = category;
    }
    pushToTaskArray(newTask) {
        taskArray.push(newTask);
    }
}

function addTask(title, description, dueDate, priority, category) {
    const newTask = new ToDoItem(title, description, dueDate, priority, category);
    ToDoItem.prototype.pushToTaskArray(newTask);
}

export default function displayTasks(item) {
    if (currentProject === "ALL TASKS") {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-card");
        taskDiv.innerHTML = `
                <p>${item.title}</p>
                <p>${item.description}</p>
                <p>${item.dueDate}</p>  
            `;
        taskContainer.appendChild(taskDiv);
    } else if (currentProject === item.category && currentProject !== "ALL TASKS") {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-card");
        taskDiv.innerHTML = `
                <p>${item.title}</p>
                <p>${item.description}</p>
                <p>${item.dueDate}</p>  
            `;
        taskContainer.appendChild(taskDiv);
    } 
}

newTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const title = taskTitle.value;
    const description = taskDescription.value;
    const dueDate = taskDueDate.value;
    let priority = "False";
    if (taskPriority.checked) {
        priority = "True";
    }
    const category = currentProject;
    addTask(title,description,dueDate,priority, category);
    
    taskContainer.textContent = "";
    taskTitle.value = "";
    taskDescription.value = "";
    taskDueDate.value = "";

    taskArray.forEach(item => displayTasks(item));
})

