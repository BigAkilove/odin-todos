import './styles.css'
import {timeLeft} from "./time-left.js";
import { displayProjects } from './dom-display.js';

function toDos (title,description,dueDate,priority,notes,checklist) {
    // //high,average,low with dom element for priority
    // //done with true or not done with false with dom element for checklist
    return {title,description,dueDate,timeLeft,priority,notes,checklist}
}

const gettingAJob = toDos('Getting a job', 'I want to get a job so I have enough money to go to Japan', new Date (2025, 2, 1), 'very important','worth trying to search programming jobs',false);
console.log(gettingAJob.timeLeft());

function Project (todo = undefined) {
    const projectName = []
    if (!todo) {
    } else {
        projectName.push(todo)
    }
    return {projectName}
}

const project1 = Project(gettingAJob);

console.log(project1)

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