import './style.css';
import React from "react";
import Col from "react-bootstrap/Col";
import {useNavigate} from "react-router-dom";

const TodoItem = (props) => {
    const navigate = useNavigate();

    const redirect = route => () => {
        navigate('single-item/' + route)
    }

    return (
        <Col xs={4}>
            <div className='taskWrapper'>
                <div className='taskHeading'
                     onClick={redirect(props.task.id)}>
                    {props.task.title}
                </div>
                <div className='taskDescription'>
                    {props.task.description}
                </div>
                <hr/>
                <label className='completed'>
                    <input type="checkbox"
                           className="form-check-input"
                           onChange={props.changeStatus(props.task.id)}
                    />
                    <span className='status-action'>Done?</span>
                </label>
                <hr/>
                <button className='btn btn-danger delete-btn'
                        onClick={props.removeTodoEl(props.task.id)}>Delete
                </button>
            </div>
        </Col>
    );
}

export default TodoItem;