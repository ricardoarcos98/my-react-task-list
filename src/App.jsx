import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import Header from "./components/Header";


function App() {
  // esta estado se encarga de almacenar las tareas
  const [tasksItems, setTasksItems] = useState([

    
  ]);
  // esta funcion se encarga de añadir elemntos al arreglo 
  function createNewTask(taskName){
    if(!tasksItems.find(task => task.name === taskName)){ // este comando impide que se repitan dos tareas iguales 
      setTasksItems([...tasksItems, {name: taskName, done: false}]) // esta es la forma como se copia y se realiza el push
    }
  }
  // esta función se encarga de cambiar el check de true a false.
  const toggleTask=task=>{
    setTasksItems(
      tasksItems.map(t => (t.name == task.name)?{...t,done: !t.done}:t)
    )
  }


  useEffect(()=>{
    let data = localStorage.getItem('task') // llama al string para guardarse como arreglo
    if(data){
     setTasksItems(JSON.parse(data)) // variable que contiene todas las tareas
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('task', JSON.stringify(tasksItems))
  },[tasksItems])

  return (
    <div className="App">
      <Header/>
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>

    </div>
  );
}

export default App;
