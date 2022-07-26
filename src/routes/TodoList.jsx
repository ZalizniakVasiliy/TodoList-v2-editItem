import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoItemToView from "../components/TodoItemToView";
import Storage from "../utils/Storage";

const TodoList = () => {
    const data = Storage.getItems() || [];

    const viewTodoList = () => (
        <Col xs={8}>
            <Row className='d-flex justify-content-center'>
                {data.map(
                    (item, index) => (
                        <Col xs={4} key={index}>
                            <TodoItemToView todoItem={item}/>
                        </Col>
                    ))}
            </Row>
        </Col>
    );

    const getNoteEmptyTodoList = () => (
        <Container>
            <main className='mt-5 text-center text-uppercase' style={{color: 'darkred'}}>
                <h1>There's nothing here!</h1>
            </main>
        </Container>
    )

    return (
        <div className='mt-5'>
            <h1 className="mt-5 mb-5 text-center">REVIEW TODO LIST</h1>
            <Container>
                <Row className='d-flex justify-content-center'>
                    {data.length ? viewTodoList() : getNoteEmptyTodoList()}
                </Row>
            </Container>
        </div>
    );
};

export default TodoList;