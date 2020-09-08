import React from 'react';


const TaskItem = props => {
    return (
        <li className={props.isCompleted ? "completed" : ""}>
            <div className="form-check"> 
                <label className="form-check-label"> 
                <input className="checkbox" type="checkbox" checked={props.isCompleted} onChange={(props.onChangeHandler)} /> 
                {props.title}
                <i className="input-helper"></i></label> 
            </div> 
            <i onClick={(props.onDeleteHandler)} className="remove mdi mdi-close-circle-outline"></i>
        </li>
    );
}

export default TaskItem;