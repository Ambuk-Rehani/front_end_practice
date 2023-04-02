import {FaTimes} from 'react-icons/fa'
import React from 'react'

const Task = ({task,onClick,onDoubleClick}) => {
  return (
    <div className={`task ${task.reminder?'reminder': ''}`} onDoubleClick={() => onDoubleClick(task.id)}>
      <h3>{task.text} <FaTimes style = {{
        color:'red', cursor:'pointer'
      }} onClick = {() => onClick(task.id)} /></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
