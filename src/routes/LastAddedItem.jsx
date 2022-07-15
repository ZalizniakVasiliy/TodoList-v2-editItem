import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const LastAddedItem = () => {
    const localStorageData = JSON.parse(localStorage.getItem('todosStorage'))[0];

    if (localStorageData) {
        return (
            <div className='mt-5'>
                <Container>
                    <h1 className='d-flex justify-content-center mb-5'>Last Added Item</h1>
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
    return (
        <Container>
            <main className='mt-5' style={{color: 'darkred'}}>
                <h2>There's nothing here!</h2>
            </main>
        </Container>
    )
}

export default LastAddedItem;