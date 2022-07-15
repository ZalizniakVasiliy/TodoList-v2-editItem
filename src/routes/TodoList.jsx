import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoItem from "../components/TodoItem";
import _ from "lodash";

const TodoList = () => {
    const data = JSON.parse(localStorage.getItem('todosStorage'));

    const handleChangeStatus = (itemId) => (e) => {
        const currentElem = data.find(item => item.id === itemId);
        currentElem.completed = e.target.checked;
        localStorage.setItem('todosStorage', JSON.stringify(data))
    }

    const handleRemoveTodoItem = (todoItemId) => () => {
        const newTodoList = data.filter(item => item.id !== todoItemId);
        localStorage.setItem('todosStorage', JSON.stringify(newTodoList));
    }

    if (data.length > 0) {
        return (
            <Container>
                <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
                <Row>
                    <Col xs={8}>
                        <Row>
                            {data.map(
                                item => (
                                    <TodoItem key={_.uniqueId()}
                                              task={item}
                                              removeTodoEl={handleRemoveTodoItem}
                                              changeStatus={handleChangeStatus}
                                    />
                                ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
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