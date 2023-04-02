import React from 'react'
import Task from './Task'

const Tasks = ({tasks,onClick,onDoubleClick}) => {
  return (
    <>{tasks.map((task) => (
        <Task key = {task.id} task = {task} onClick = {onClick} onDoubleClick = {onDoubleClick}/>))}
    </>
  )
}

export default Tasks
