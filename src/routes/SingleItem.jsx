import React from "react";
import {useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoItem from "../components/TodoItem";
import _ from "lodash";

const SingleItem = () => {
    const {todoId} = useParams();

    const data = JSON.parse(localStorage.getItem('todosStorage'));

    const localStorageItem = JSON.parse(localStorage.getItem('todosStorage'))
        .find(item => item.id === todoId);

    const localStorageItemIndex = JSON.parse(localStorage.getItem('todosStorage'))
        .findIndex(item => item.id === todoId);

    const handleChangeStatus = () => (e) => {
        localStorageItem.completed = e.target.checked;
        data[localStorageItemIndex] = localStorageItem;
        localStorage.setItem('todosStorage', JSON.stringify(data))
    }

    const handleRemoveTodoItem = (todoItemId) => () => {
        const newTodoList = data.filter(item => item.id !== todoItemId);
        localStorage.setItem('todosStorage', JSON.stringify(newTodoList));
    }

    if (localStorageItem) {
        return (
            <div className='mt-5'>
                <Container>
                    <h1 className='d-flex justify-content-center mb-5'>Single Item</h1>
                    <Row>
                        <Col>
                            <TodoItem key={_.uniqueId()}
                                      task={data[localStorageItemIndex]}
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

export default SingleItem;