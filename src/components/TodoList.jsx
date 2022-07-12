import React, {useState, useEffect} from "react";
import Form from "./Form";
import Item from './Item';
import _ from 'lodash';
import cn from 'classnames';

const TodoList = () => {
    const storageName = 'todosStorage';

    const [todoItem, setNewTodoItem] = useState({
        title: '',
        description: '',
        completed: false,
        id: ''
    });

    const [todoList, setNewTodoList] = useState(() => (
        JSON.parse(localStorage.getItem(storageName)) || []
    ));

    const handleChangeInput = (e) => {
        setNewTodoItem({...todoItem, [e.target.name]: e.target.value});
    };

    useEffect(() => (
        localStorage.setItem(storageName, JSON.stringify(todoList))
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
        const statusExecution = e.target.checked;
        const currentElem = todoList.find(item => item.id === itemId);
        currentElem.completed = statusExecution;
        localStorage.setItem(storageName, JSON.stringify(todoList))
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

    const activeAddBtn = cn('btn btn-primary mb-1',
        {
            'disabled': todoItem.title.trim() === ''
                || todoItem.description.trim() === ''
        });

    if (todoList.length > 0) {
        return (
            <>
                <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
                <div className="container">
                    <div className="row">
                        <Form className={activeAddBtn}
                              todoEl={todoItem}
                              changeInput={handleChangeInput}
                              addTodoEl={handleAddTodoItem}
                              resetTodoEl={handleResetInputs}
                              removeAllTodos={handleRemoveAllItems}
                        />
                        <div className="col-9">
                            <div className="row" id="todoItems">
                                {todoList.map(item => {
                                    return <Item key={_.uniqueId()}
                                                 task={item}
                                                 removeTodoEl={handleRemoveTodoItem}
                                                 changeStatus={handleChangeStatus}
                                    />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
            <div className="container">
                <div className="row">
                    <Form className={activeAddBtn}
                          todoEl={todoItem}
                          changeInput={handleChangeInput}
                          addTodoEl={handleAddTodoItem}
                          resetTodoEl={handleResetInputs}
                    />
                </div>
            </div>
        </>
    )
}

export default TodoList;