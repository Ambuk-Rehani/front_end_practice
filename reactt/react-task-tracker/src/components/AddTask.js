import { useState } from "react"


const AddTask = ({onAdd}) => {

    const [name, setName] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onClick = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please enter the text')
        }

        onAdd({text :name, day, reminder})

        setName('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className = 'add-form' onSubmit={onClick}>
            <div className="form-control">
                <label>Task</label>
                <input type = 'text' placeholder="Add Task" value={name}
                onChange = {(e) => setName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type = 'text' placeholder="Add Day & Time" value = {day}
                onChange = {(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type = 'checkbox' value={reminder} checked = {reminder}
                onChange = {(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type = 'submit' value = 'Save Task' className = 'btn btn-block'/>
        </form>
    )
}

export default AddTask

