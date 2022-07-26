import './style.css';
import React from "react";

const TodoItemToChange = props => (
    <div className='taskWrapperToEdit'>
        <div className='taskHeadingToEdit'>{props.todoItem.title}</div>
        <div className='taskDescriptionToEdit'>{props.todoItem.description}</div>
    </div>
)

export default TodoItemToChange;