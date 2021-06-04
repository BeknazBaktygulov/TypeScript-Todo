import React from 'react'
import { ITask } from '../Interfaces'


interface Props {
    task: ITask;
}

const TodoTask = ({task}: Props) => {
    return (
        <div>
           <h1>{task.taskName}</h1>
        </div>
    )
}

export default TodoTask
