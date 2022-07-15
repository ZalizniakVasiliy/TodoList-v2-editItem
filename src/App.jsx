import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom";
import HomePage from './routes/HomePage';
import SingleItem from "./routes/SingleItem";
import TodoList from "./routes/TodoList";
import LastAddedItem from "./routes/LastAddedItem";
import Container from "react-bootstrap/Container";

function App() {
    return (
        <>
            <Header/>

            <main>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='single-item' element={<LastAddedItem/>}/>
                    <Route path='single-item/:todoId' element={<SingleItem/>}/>
                    <Route path='all-items' element={<TodoList/>}/>
                    <Route path='*'
                           element={
                               <Container>
                                   <main className='mt-5' style={{color: 'darkred'}}>
                                       <h2>There's nothing here!</h2>
                                   </main>
                               </Container>
                           }
                    />
                </Routes>
            </main>

            <Footer/>
        </>
    )
}

export default App;
