import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TodoForm from '../components/TodoForm';
import TodoItem from "../components/TodoItem";
import Storage from "../utils/Storage";

const HomePage = () => {
    const localStorageData = Storage.getItems() || [];
    const [todoList, setNewTodoList] = useState([...localStorageData]);

    const handleAddTodoItem = todoItem => {
        const newState = Storage.setItem(todoItem);
        setNewTodoList(newState);
    };

    const handleChangeStatus = itemId => e => {
        const currentElem = localStorageData.find(item => item.id === itemId);
        currentElem.executionStatus = e.target.checked ? 'completed' : 'no-status';
        localStorage.setItem('todosStorage', JSON.stringify(localStorageData))
    };

    const handleRemoveTodoItem = todoItemId => () => {
        const newTodoList = todoList.filter(item => item.id !== todoItemId);
        localStorage.setItem('todosStorage', JSON.stringify(newTodoList));
        setNewTodoList(newTodoList);
    };

    const handleRemoveAllItems = () => {
        setNewTodoList([]);
        localStorage.clear();
    };

    if (todoList.length > 0) {
        return (
            <div className='mt-5'>
                <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <TodoForm
                                handleAdd={handleAddTodoItem}
                                removeAllTodos={handleRemoveAllItems}
                            />
                        </Col>
                        <Col xs={8}>
                            <Row>
                                {todoList.map(
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
        <>
            <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
            <Container>
                <Row>
                    <Col xs={4}>
                        <TodoForm
                            handleAdd={handleAddTodoItem}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage;