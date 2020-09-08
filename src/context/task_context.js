import React from 'react';
import  createTaskStore  from '../stores/task_store';
import { useLocalStore } from 'mobx-react';

const TaskContext = React.createContext(null);

export const TaskProvider = ({children}) => {
    const taskStore = useLocalStore(createTaskStore);

    return <TaskContext.Provider value={taskStore}>
            {children}
        </TaskContext.Provider>
}

export const useTaskStore = () => React.useContext(TaskContext);