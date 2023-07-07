

import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import Header from "./components/Header";
import { TodoCounter } from "./components/TodoCounter";
import { useTodo } from "./hooks/useTodo";

import "./App.css";
function App() {
  // esta estado se encarga de almacenar las tareas
  const { createNewTask, tasksItems  }=useTodo()


  // const [tasksItems, setTasksItems] = useState([

  // ]);
  
  
  // // esta funcion se encarga de añadir elemntos al arreglo 
  // let index = uuidv4();
  // function createNewTask(taskName){
  //   if(!tasksItems.find(task => task.name === taskName)){ // este comando impide que se repitan dos tareas iguales 
  //     setTasksItems([...tasksItems, {id:index , name: taskName, done: false}]) // esta es la forma como se copia y se realiza el push
  //   }else{
  //     alert("Task repeated")
  //   }
  // }
  
// esta función se encarga de contar las tareas faltantes
  const completed=tasksItems.filter((todo)=>(!!todo.done)).length
  const all=tasksItems.length



    // funcion que se encarga de editar las tareas
    function EditTask(edit) {
      const newArray =  tasksItems.map((task) => {
        if (task.id === edit.id) {
          return { ...task, name: edit.name };
        } else {
          return task;
        }
      })
      
      setTasksItems(newArray);
    }


    
  // esta función se encarga de cambiar el check de true a false.
  const toggleTask=task=>{
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name)?{...t,done: !t.done}:t)
      )
    }

  //


 

    // función para eliminar las tareas 
  const handleDeleteTask= ( taskName ) => { //argumento cualquiera
  const temp=tasksItems.filter((task)=>task.name !== taskName) //muestra las tareas menos la que le digo 
  setTasksItems(temp)
  }

  // funcion para guardarse como local storage 
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
      {/* TITULO */}
      <Header/>
      {/* boton Input y add */}
      <TaskCreator createNewTask={createNewTask} />

      {/* tarea y funcionalidades */}
      <TaskTable
       task={tasksItems}      
       setTasksItems={setTasksItems}
       toggleTask={toggleTask} 
       handleDelete={handleDeleteTask} EditTask={EditTask} 

       //editTask={editTask}
       />
      {/* tareas completadas */}
      <TodoCounter counter={completed} all={all} />


    </div>
  );
}

export default App;
