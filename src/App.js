import React from 'react';
import './App.css';
import { useTaskStore } from './context/task_context';
import { useObserver } from "mobx-react";
import TaskItem from './components/tasks/task_item';
import AddNewTask from './components/tasks/task_add';

function App() {
  const taskStore = useTaskStore();
  return useObserver( () => (
      <div className = "main">
          <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-lg-12"> 
                        <div className="card px-3">
                            <div className="card-body">
                                <h4 className="card-title">Task Manager</h4>
                                <AddNewTask />
                                <div className="list-wrapper">
                                    <ul className="d-flex flex-column-reverse todo-list">
                                        
                                        {taskStore.tasks.map(task => (
                                           
                                            <TaskItem key={task.taskId} title={task.description} isCompleted={task.isCompleted} 
                                            onChangeHandler={() =>  {
                                                task.isCompleted = !task.isCompleted; 
                                                taskStore.updateTask(task.taskId, {...task, isCompleted: task.isCompleted});
                                                console.log("Update Complete Status");
                                              }} 
                                              
                                            onDeleteHandler={() => {
                                              taskStore.removeTask(task.taskId);
                                              console.log("Task is removed")
                                            }}
                                              />
                                        ))}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    ));
}

export default App;
