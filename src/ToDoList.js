import React from "react";

const ToDoList = (props)=>{

    return (
        <>
        <div className="todo_style">
        <i className="far fa-times-circle" onClick={()=> {props.onclick(props.id);
        }} />

        <li> {props.text}  </li>
        </div>

    
    </>
    )
};

export default ToDoList;