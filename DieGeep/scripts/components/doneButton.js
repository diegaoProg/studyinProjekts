/**
* Component - 'done' button
 */
    const DoneButton = () =>
    {
        const doneButton = document.createElement('button');
        doneButton.classList.add('check-button');
        doneButton.innerText = 'concluir';
        doneButton.addEventListener('click', taskDone);
        return doneButton;
    }
/**
 * Function - put a line through on current task
 * @param {click on 'done' button} event
 * * to find the task on target * *
 */
    const taskDone = (event) =>
    {
        const doneButton = event.target;
        const taskDoneParent = doneButton.parentElement;
        taskDoneParent.classList.toggle('done');
    }

//to use on main.js
    export default DoneButton;
