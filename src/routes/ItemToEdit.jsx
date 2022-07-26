import {useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import EditTodoForm from "../components/EditTodoForm";
import Storage from "../utils/Storage";
import Col from "react-bootstrap/Col";
import {useState} from "react";
import TodoItemToChange from "../components/TodoItemToChange";

const ItemToEdit = () => {
    const {todoId} = useParams();
    const data = Storage.getItems() || [];
    const [todoList, setNewTodoList] = useState([...data]);
    const currentIndex = todoList.findIndex(item => item.id === Number(todoId));

    const handleUpdateTodoItem = e => {
        const currentTitle = e.title.trim();
        const currentDescription = e.description.trim();
        const todoItemId = todoList[currentIndex].id;
        const newState = Storage.changeContent(todoItemId, currentTitle, currentDescription);
        setNewTodoList(newState);
    };

    const renderItem = () => (
        <Col xs={4}>
            <Row>
                <TodoItemToChange
                    todoItem={todoList[currentIndex]}
                />
            </Row>
        </Col>
    );

    const getNoteEmptyContent = () => (
        <div className='mt-5 text-center text-uppercase'>
            <Container>
                <main className='mt-5' style={{color: 'darkred'}}>
                    <h1>There's nothing here!</h1>
                </main>
            </Container>
        </div>
    )

    return (
        todoList[currentIndex] ?
            <div className='mt-5'>
                <Container>
                    <h1 className='mb-5 text-center'>ITEM TO EDIT with id: {todoId}</h1>
                    <Row className='d-flex justify-content-center'>
                        <Col xs={4}>
                            <EditTodoForm
                                elem={TodoItemToChange}
                                handleUpdate={handleUpdateTodoItem}
                            />
                        </Col>
                        {renderItem()}
                    </Row>
                </Container>
            </div> : getNoteEmptyContent()
    )
}

export default ItemToEdit;