import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const TodoForm = (props) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="todoFormTitle">
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    name='title'
                    value={props.todoEl.title}
                    onChange={props.changeInput}
                    type="text"
                    placeholder="Task title"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="todoFormDescription">
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    name='description'
                    value={props.todoEl.description}
                    onChange={props.changeInput}
                    as='textarea'
                    placeholder="Task description"
                    style={{
                        height: '150px'
                    }}/>
            </Form.Group>
            <Button variant="primary mb-1 d-block"
                    type="submit"
                    className={props.className}
                    onClick={props.addTodoEl}>
                Create Task
            </Button>
            <Button variant="warning mb-1 d-block"
                    onClick={props.resetTodoEl}>
                Clear
            </Button>
            <Button variant="danger mb-1 d-block"
                    onClick={props.removeAllTodos}>
                Delete All
            </Button>
        </Form>
    )
}

export default TodoForm;