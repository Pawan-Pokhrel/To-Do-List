import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({input, setInput, tasks, setTasks, editTask, setEditTask}) => {

    const updateTask = (title, id, completed) => {
        const newTask = tasks.map((task) => 
            task.id === id ? {title, id, completed} : task
        )
        setTasks(newTask);
        setEditTask('');
    };

    useEffect(() => {
        if(editTask) {
            setInput(editTask.title);
        } else {
            setInput('');
        }
    },[setInput, editTask]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTask) {
            setTasks([...tasks, {id: uuidv4(), title: input, completed: false}]);
            setInput('');
        } else {
            updateTask(input, editTask.id, editTask.completed);
        }
    };
            
    return (
        <form action="" onSubmit={onFormSubmit}>
            <input type="text" placeholder="Enter a task......" className="task-input" value={input} required onChange={onInputChange}/>
            <button className="button-add" type="submit">
                {editTask ? 'OK': 'Add'}
            </button>
        </form>
    );
}
 
export default Form;