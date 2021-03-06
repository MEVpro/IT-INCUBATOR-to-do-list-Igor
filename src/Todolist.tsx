import React from "react";

type TodolistPropsType = {
    title: string
    task: Array<TodolistTasksType>
}
type TodolistTasksType = {
    title: string
    id: number
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.task.map(el=>{
                    return (
                        <li>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}