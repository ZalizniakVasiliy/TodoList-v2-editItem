import {useState} from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TodoForm from '../components/TodoForm';
import TodoItem from "../components/TodoItem";
import Storage from "../utils/Storage";

const HomePage = () => {
    const data = Storage.getItems() || [];
    const [todoList, setNewTodoList] = useState([...data]);

    const handleAddTodoItem = todoItem => {
        const newState = Storage.setItem(todoItem);
        setNewTodoList(newState);
    };

    const handleChangeStatus = todoItemId => ({target}) => {
        // const status = e.target.checked ? 'completed' : 'no-status';
        const newState = Storage.changeStatus(target, todoItemId);
        setNewTodoList(newState);
    };

    const handleRemoveTodoItem = todoItemId => () => {
        const newState = Storage.removeItem(todoItemId);
        setNewTodoList(newState);
    };

    const handleRemoveAllItems = () => {
        setNewTodoList([]);
        Storage.clearStorage();
    };

    const renderTodoList = () => (
        <Col xs={8}>
            <Row>
                {todoList.map(
                    (item, index) => (
                        <Col xs={4} key={index} className='text-break'>
                            <TodoItem todoItem={item}
                                      removeTodoEl={handleRemoveTodoItem}
                                      changeStatus={handleChangeStatus}
                            />
                        </Col>
                    ))}
            </Row>
        </Col>
    );

    return (
        <div className='mt-5'>
            <h1 className="text-center mt-5 mb-5">MAKING TODO LIST</h1>
            <Container>
                <Row>
                    <Col xs={4}>
                        <TodoForm
                            handleAdd={handleAddTodoItem}
                            removeAllTodos={handleRemoveAllItems}
                        />
                    </Col>
                    {todoList.length ? renderTodoList() : null}
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;