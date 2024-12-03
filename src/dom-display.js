export {displayProjects}

const domContent = document.getElementById('content')

function displayProjects (project) {
    console.log(project)
    const todos = project.projectName
    for (let i =0; i<todos.length; i++) {
        let todo = todos[i];

    const container = document.createElement('div')
    container.classList.add('to-do')
    domContent.appendChild(container)

    const title = document.createElement('div')
    title.classList.add('title')
    let textNode = document.createTextNode(todo.title)
    title.appendChild(textNode)
    container.appendChild(title)

    const description = document.createElement('div')
    description.classList.add('description')
    textNode = document.createTextNode(todo.description)
    description.appendChild(textNode)
    container.appendChild(description)


    const dueDate = document.createElement('div')
    dueDate.classList.add('due-date')
    textNode = document.createTextNode(todo.dueDate)
    dueDate.appendChild(textNode)
    container.appendChild(dueDate)


    const timeLeft = document.createElement('div')
    timeLeft.classList.add('time-left')
    textNode = document.createTextNode(todo.timeLeft())
    timeLeft.appendChild(textNode)
    container.appendChild(timeLeft)


    const priority = document.createElement('div')
    priority.classList.add('priority')
    textNode = document.createTextNode(todo.priority)
    priority.appendChild(textNode)
    container.appendChild(priority)


    const notes = document.createElement('div')
    notes.classList.add('notes')
    textNode = document.createTextNode(todo.notes)
    notes.appendChild(textNode)
    container.appendChild(notes)


    const checklist = document.createElement('div')
    checklist.classList.add('checklist')
    textNode = document.createTextNode(todo.checklist)
    checklist.appendChild(textNode)
    container.appendChild(checklist)


    }
        
}