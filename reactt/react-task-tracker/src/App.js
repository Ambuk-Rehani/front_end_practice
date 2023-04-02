import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';


function App() {

  const [tasks, setTask] = useState([{
    id:1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
},{
    id:2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
},{
    id:3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
}])

const onClick = (id) => {
  setTask(tasks.filter((task) => task.id !== id))
}

const toggleDouble = (id) => {
  setTask(tasks.map((task) => 
  task.id === id?{...task,reminder:!task.reminder}:task))
}

  return (
    <div className="App">
      <Header title = "Ambuk"/>
      {tasks.length > 0 ?
      (<Tasks tasks = {tasks} onClick = {onClick} onDoubleClick = {toggleDouble}/>):
      ('No Tasks to show')}
    </div>
  );
}

export default App;
