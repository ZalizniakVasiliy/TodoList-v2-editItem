import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoItem from "../components/TodoItem";
import _ from "lodash";

const LastAddedItem = () => {
    const data = JSON.parse(localStorage.getItem('todosStorage'));

    const handleChangeStatus = () => (e) => {
        data[0].completed = e.target.checked;
        localStorage.setItem('todosStorage', JSON.stringify(data))
    }

    const handleRemoveTodoItem = (todoItemId) => () => {
        const newTodoList = data.filter(item => item.id !== todoItemId);
        localStorage.setItem('todosStorage', JSON.stringify(newTodoList));
    }

    if (data[0]) {
        return (
            <div className='mt-5'>
                <Container>
                    <h1 className='d-flex justify-content-center mb-5'>Last Added Item</h1>
                    <Row>
                        <Col>
                            <TodoItem key={_.uniqueId()}
                                      task={data[0]}
                                      removeTodoEl={handleRemoveTodoItem}
                                      changeStatus={handleChangeStatus}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    return (
        <Container>
            <main className='mt-5' style={{color: 'darkred'}}>
                <h2>There's nothing here!</h2>
            </main>
        </Container>
    )
}

export default LastAddedItem;