//components
import DoneButton from './components/doneButton.js';
import DeleteButton from './components/deleteButton.js';

//functions    
    /**
     * Main Function - put a new task row on the tasks list
     * @param {click on 'add task' button} event
     * * to handle previous behaviors * *
     */
    const createTask = (event) =>
    {   
        event.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const newItem = input.value;
        const list = document.querySelector('[data-list]');
        const task = document.createElement('li');
        task.classList.add('task');
        const content = `<p class="content"> ${newItem} </p>`;
        task.innerHTML = content;    
        task.appendChild(DoneButton());
        task.appendChild(DeleteButton());
        list.appendChild(task);    
        input.value = ' ';
    }

    const newTask = document.querySelector('[data-form-button]');

    newTask.addEventListener('click', createTask);