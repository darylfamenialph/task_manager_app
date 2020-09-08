import React from 'react';
import { useTaskStore } from '../../context/task_context';

const AddNewTask = () => {
    const [newTask, setNewTask] = React.useState("");
    const taskStore = useTaskStore();

    return (
        <div className="add-items d-flex"> 
            <input type="text" onChange={(e) => setNewTask(e.target.value) } className="form-control todo-list-input" placeholder="What do you need to do today?" /> 
            <button onClick={
             () => taskStore.addTask(newTask)
            } className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> 
        </div>
    );
}

export default AddNewTask;