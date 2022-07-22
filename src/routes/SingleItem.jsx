import {useParams, useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TodoItem from "../components/TodoItem";
import EditTodoForm from "../components/EditTodoForm";
import Storage from "../utils/Storage";
import Col from "react-bootstrap/Col";

const SingleItem = () => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/');
    };

    const {todoId} = useParams();
    const data = Storage.getItems() || [];
    const localStorageItemIndex = Storage.getItems().findIndex(item => item.id === +todoId);

    const handleUpdateTodoItem = (e) => {
        const currentEl = JSON.parse(localStorage.getItem('todosStorage'))[localStorageItemIndex];
        currentEl.title = e.title;
        currentEl.description = e.description;
        data[localStorageItemIndex] = currentEl;
        localStorage.setItem('todosStorage', JSON.stringify(data));
        redirect();
    };

    const handleChangeStatus = () => (e) => {
        data[localStorageItemIndex].executionStatus = e.target.checked ? 'completed' : 'no-status';
        localStorage.setItem('todosStorage', JSON.stringify(data));
    };

    const handleRemoveTodoItem = (todoItemId) => () => {
        const newTodoList = data.filter(item => item.id !== todoItemId);
        localStorage.setItem('todosStorage', JSON.stringify(newTodoList));
        redirect();
    };

    if (data) {
        return (
            <div className='mt-5'>
                <Container>
                    <h1 className='mb-5'>Single Item</h1>
                    <Row>
                        <Col xs={3}>
                            <EditTodoForm
                                handleUpdate={handleUpdateTodoItem}
                            />
                        </Col>
                        <Col>
                            <TodoItem
                                todoItem={data[localStorageItemIndex]}
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