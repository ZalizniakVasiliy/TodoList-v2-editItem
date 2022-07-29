import {useParams, useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import EditTodoForm from "../components/EditTodoForm";
import Storage from "../utils/Storage";
import Col from "react-bootstrap/Col";
import {useState} from "react";

const ItemToEdit = () => {
    const navigate = useNavigate();
    const {todoId} = useParams();
    const data = Storage.getItems() || [];
    const [todoList, setNewTodoList] = useState([...data]);
    const currentItem = todoList.find(item => item.id === Number(todoId));

    const redirect = () => {
        navigate('../');
    };

    const handleUpdateTodoItem = e => {
        const currentTitle = e.title.trim();
        const currentDescription = e.description.trim();
        const todoItemId = currentItem.id;
        const newState = Storage.changeContent(todoItemId, currentTitle, currentDescription);
        setNewTodoList(newState);
        redirect();
    };

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
        currentItem ?
            <div className='mt-5'>
                <Container>
                    <h1 className='mb-5 text-center'>ITEM TO EDIT with id: {todoId}</h1>
                    <Row className='d-flex justify-content-center'>
                        <Col xs={4}>
                            <EditTodoForm
                                preloadValues={currentItem}
                                handleUpdate={handleUpdateTodoItem}
                            />
                        </Col>
                    </Row>
                </Container>
            </div> : getNoteEmptyContent()
    )
}

export default ItemToEdit;