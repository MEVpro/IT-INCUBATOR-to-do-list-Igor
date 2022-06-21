import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const task = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Next", isDone: false}
    ]

    return (
        <div className="App">
           <Todolist
               title={"What to learn"}
               task={task}
           />

        </div>
    );
}

export default App;
