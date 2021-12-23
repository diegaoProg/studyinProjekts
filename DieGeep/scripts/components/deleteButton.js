/**
 * Component 2 - 'delete' button
 */
    const DeleteButton = () =>
    {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'apagar';
        deleteButton.addEventListener('click', taskDel);
        return deleteButton;
    }

/**
 * Function - erase current task from the list
 * @param {click on 'delete' button} event
 * * * to find the task on target * *
 */
    const taskDel = (event) =>
    {
        const deleteButton = event.target;
        const taskDeletedParent = deleteButton.parentElement;
        taskDeletedParent.remove();
    }

//to use on main.js
    export default DeleteButton;