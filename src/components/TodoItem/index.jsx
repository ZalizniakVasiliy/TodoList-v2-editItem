import './style.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import Col from "react-bootstrap/Col";

const TodoItem = props => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate('single-item/' + props.todoItem.id)
    };

    return (
        <Col xs={4}>
            <div className='taskWrapper'>
                <div className='taskHeading'
                     onClick={redirect}>{props.todoItem.title}
                </div>
                <div className='taskDescription'>{props.todoItem.description}
                </div>
                <hr/>
                <label className='status'>
                    <input type="checkbox"
                           className="form-check-input"
                           onChange={props.changeStatus(props.todoItem.id)}
                    />
                    <span className='status-action'>Done?</span>
                </label>
                <hr/>
                <button className='btn btn-danger delete-btn d-block'
                        onClick={props.removeTodoEl(props.todoItem.id)}>Delete
                </button>
            </div>
        </Col>
    );
}

export default TodoItem;