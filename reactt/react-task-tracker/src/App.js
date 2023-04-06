import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import {useState,useEffect} from 'react';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {

  const [addToggle, setAddToggle] = useState(false)

  const [tasks, setTask] = useState([])


  const onAdd = async (task) => {
    const res = await fetch('http://localhost:5000/tasks/',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task),
    })

    const data = await res.json()
    setTask([...tasks, data])
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }  

  const onClick = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })

    setTask(tasks.filter((task) => task.id !== id))
}


  const toggleDouble = async (id) => {
    const getTask = await fetchTask(id)
    const updTask = {...getTask, reminder:!getTask.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(updTask)
    })

    const data = await res.json()

    setTask(tasks.map((task) => 
    task.id === id?{...task,reminder:data.reminder}:task))
  }

  useEffect(() => {
    const getTasks = async() =>{
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }
  
    getTasks()
  },[])
  
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  
  

  return (
  <Router>
    <div className="App">
      <Header title = "Ambuk" onAddToggle = {() => setAddToggle(!addToggle)} addT = {addToggle}/>
      <Routes>
      <Route path = '/' element= {
        <>
         {addToggle && <AddTask onAdd = {onAdd}/>}
        {tasks.length > 0 ?
      (<Tasks tasks = {tasks} onClick = {onClick} onDoubleClick = {toggleDouble}/>):
      ('No Tasks to show')}
        </>
      }/>
      <Route path = '/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
