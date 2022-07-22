import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoItem from "../components/TodoItem";
import {useNavigate} from "react-router-dom";
import Storage from "../utils/Storage";

const TodoList = () => {
    const navigate = useNavigate();
    const data = Storage.getItems() || [];

    const handleChangeStatus = (itemId) => (e) => {
        const currentElem = data.find(item => item.id === itemId);
        currentElem.executionStatus = e.target.checked ? 'completed' : 'no-status';
        localStorage.setItem('todosStorage', JSON.stringify(data))
    };

    const redirect = () => {
        navigate('/');
    };

    const handleRemoveTodoItem = (todoItemId) => () => {
        const newTodoList = data.filter(item => item.id !== todoItemId);
        localStorage.setItem('todosStorage', JSON.stringify(newTodoList));
        redirect();
    };

    if (data.length > 0) {
        return (
            <div className='mt-5'>
                <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
                <Container>
                    <Row className='d-flex justify-content-evenly'>
                        <Col xs={9}>
                            <Row>
                                {data.map(
                                    (item, index) => (
                                        <TodoItem key={index}
                                                  todoItem={item}
                                                  removeTodoEl={handleRemoveTodoItem}
                                                  changeStatus={handleChangeStatus}
                                        />
                                    ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    return (
        <Container>
            <main className='mt-5' style={{color: 'darkred'}}>
                <h2>There's nothing here!</h2>
            </main>
        </Container>
    )
};

export default TodoList;