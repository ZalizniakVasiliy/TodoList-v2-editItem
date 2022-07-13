import React from "react";
import {useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SingleItem = () => {
    const {todoId} = useParams();
    const localStorageData = JSON.parse(localStorage.getItem('todosStorage'))
        .find(item => item.id === todoId);

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col xs={4}>
                        <div className='taskWrapper'>
                            <div className='taskHeading'
                            >{localStorageData.title}</div>
                            <div className='taskDescription'>{localStorageData.description}</div>
                            <hr/>
                            <label className='completed'>
                                <input type="checkbox"
                                       className="form-check-input"
                                />
                                <span className='status-action'>Done?</span>
                            </label>
                            <hr/>
                            <button className='btn btn-danger delete-btn'>
                                Delete
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SingleItem;