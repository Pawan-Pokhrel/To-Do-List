const Todolist = ({tasks, setTasks, setEditTask}) => {

    const handleDeComplete = (task) => {
        setTasks(tasks.map((item) => {
            if(item.id === task.id) {
                return {...item, completed: !item.completed}
            }
            return item;
        }))
    };

    const handleEdit =({id}) => {
        const findTask = tasks.find((task) => task.id === id);
        setEditTask(findTask);
    };

    const handleDelete = ({id}) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="task-list-container">
            {
                tasks.map((task) => (
                    <li className="task-list" key={task.id}>
                        <input type="text" className={'list ${task.completed ?"complete" : ""}'} value={task.title} onChange={(event) => event.preventDefault()}/>

                        <div className="task-buttons">
                            <button className="button-complete task-button" onClick={() => handleDeComplete(task)}>

                            </button>
                            <button className="button-edit task-button" onClick={() => handleEdit(task)}>

                            </button>
                            <button className="button-delete task-button" onClick={() => handleDelete(task)}>

                            </button>
                        </div>
                    </li>
                ))

                
            }
        </div>
    );
}
 
export default Todolist;