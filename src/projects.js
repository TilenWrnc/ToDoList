import displayTasks from "./tasks";
import { taskArray } from "./tasks";
import { taskContainer } from "./tasks";

const newProjectButton = document.querySelector(".new-project-button");
const closeNewProjectForm = document.querySelector(".close-new-project-form-button");
const newProjectPopUp = document.querySelector("#new-project-modal");
const allTasks = document.querySelector("#all-tasks");


newProjectButton.addEventListener("click", () => {
    newProjectPopUp.classList.remove("new-project-modal-closed");
})

closeNewProjectForm.addEventListener("click", () => {
    newProjectPopUp.classList.add("new-project-modal-closed");
})

const newProjectForm = document.querySelector("#new-project-form");
const projectContainer = document.querySelector(".project-container");
const projectName = document.querySelector("#project-input");

let allProjects = document.querySelectorAll(".project");
export let currentProject = allTasks.value;
const intro = document.querySelector(".dos");

function addProjectEventListener(project) {
    project.addEventListener("click", () => {
        currentProject = project.value;
        intro.textContent = project.value;
        taskContainer.innerHTML = "";
        taskArray.forEach((item) => {
            if (currentProject === item.category && currentProject !== "ALL TASKS") {
                displayTasks(item);
            } else if (currentProject === "ALL TASKS") {
                displayTasks(item);
            }
        })
    });
}

allProjects.forEach(addProjectEventListener);

newProjectForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newProjectH1 = document.createElement("button");
    const projectDeleteButton = document.createElement("button");
    projectDeleteButton.classList.add("remove-project");
    projectDeleteButton.textContent = "X";
    newProjectH1.classList.add("project");
    newProjectH1.setAttribute("value", projectName.value)
    newProjectH1.textContent = projectName.value;
    newProjectH1.appendChild(projectDeleteButton)
    projectContainer.appendChild(newProjectH1);
    addProjectEventListener(newProjectH1);
})

