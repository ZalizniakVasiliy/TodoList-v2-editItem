import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TodoForm from '../components/TodoForm';
import TodoItem from "../components/TodoItem";
import _ from 'lodash';
import cn from 'classnames';

const HomePage = () => {
    const localStorageData = JSON.parse(localStorage.getItem('todosStorage')) || [];

    const [todoItem, setNewTodoItem] = useState({
        title: '',
        description: '',
        completed: false,
        id: ''
    });

    const [todoList, setNewTodoList] = useState([...localStorageData]);

    const handleChangeInput = (e) => {
        e.preventDefault();
        setNewTodoItem({...todoItem, [e.target.name]: e.target.value});
    };

    useEffect(() => (
        localStorage.setItem('todosStorage', JSON.stringify(todoList))
    ), [todoList]);

    const handleAddTodoItem = (e) => {
        e.preventDefault();
        const newTodoItem = {...todoItem, id: _.uniqueId()};
        const newTodoList = [newTodoItem, ...todoList];
        setNewTodoList(newTodoList);
        setNewTodoItem(
            {
                title: '',
                description: '',
                completed: false,
                id: ''
            }
        );
    };

    const handleChangeStatus = (itemId) => (e) => {
        const currentElem = todoList.find(item => item.id === itemId);
        currentElem.completed = e.target.checked;
        localStorage.setItem('todosStorage', JSON.stringify(todoList))
    }

    const handleRemoveTodoItem = (todoItemId) => () => {
        const newTodoList = todoList.filter(item => item.id !== todoItemId);
        setNewTodoList(newTodoList);
    }

    const handleResetInputs = () => {
        return todoItem.title || todoItem.description ?
            setNewTodoItem({
                ...todoItem,
                title: '',
                description: ''
            }) : true;
    }

    const handleRemoveAllItems = () => {
        setNewTodoList([]);
        localStorage.clear();
    }

    const activeAddBtn = cn({
        'disabled': todoItem.title.trim() === ''
            || todoItem.description.trim() === ''
    });

    if (todoList.length > 0) {
        return (
            <>
                <h1 className="text-center mt-5 mb-5">TODO LIST</h1>

                <Container>
                    <Row>
                        <Col xs={4}>
                            <TodoForm className={activeAddBtn}
                                      todoEl={todoItem}
                                      changeInput={handleChangeInput}
                                      addTodoEl={handleAddTodoItem}
                                      resetTodoEl={handleResetInputs}
                                      removeAllTodos={handleRemoveAllItems}/>
                        </Col>
                        <Col xs={8}>
                            <Row>
                                {todoList.map(
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
            </>
        );
    }
    return (
        <>
            <h1 className="text-center mt-5 mb-5">TODO LIST</h1>

            <Container>
                <Row>
                    <Col xs={4}>
                        <TodoForm className={activeAddBtn}
                                  todoEl={todoItem}
                                  changeInput={handleChangeInput}
                                  addTodoEl={handleAddTodoItem}
                                  resetTodoEl={handleResetInputs}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage;