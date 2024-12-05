import './styles.css'
import { formatDuration } from "date-fns";
import { displayProjects } from './dom-display.js';
import { distanceBetweenDates } from './time-left.js';

function toDos (title,description,dueDate,priority,notes,checklist) {
    // //high,average,low with dom element for priority
    // //done with true or not done with false with dom element for checklist
    let timeLeft = formatDuration(distanceBetweenDates(dueDate))
    let checklistEmote 
    if (checklist) {
        checklistEmote = 'Done: ✅'
    } else 
        checklistEmote = 'Done: ❌'
    return {title,description,dueDate,timeLeft,priority,notes,checklistEmote}
    // return {title,description,dueDate,timeLeft,priority,notes,checklistEmote}

}

const gettingAJob = toDos('Getting a job', 'I want to get a job so I have enough money to go to Japan', new Date (2025, 2, 9), 'high','worth trying to search programming jobs',false);

function Project (todo = undefined) {
    const projectName = []
    if (!todo) {
    } else {
        projectName.push(todo)
    }
    return {projectName}
}
console.log(formatDuration(distanceBetweenDates(gettingAJob.dueDate)))

const project1 = Project(gettingAJob);

displayProjects(project1)

















/*
npm init -y
npm install --save-dev webpack webpack-cli
npx webpack
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
npm install --save-dev webpack-dev-server
*/