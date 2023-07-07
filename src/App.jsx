

import {  useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import Header from "./components/Header";
import { TodoCounter } from "./components/TodoCounter";
import { useTodo } from "./hooks/useTodo";

import "./App.css";
function App() {
  // esta estado se encarga de almacenar las tareas
  const { createNewTask, tasksItems, EditTask, handleDeleteTask,toggleTask,setTasksItems  }=useTodo()

  function handleAddTodo(todo){
    createNewTask(todo);
  }
  function handleEditTodo(todo){
    EditTask(todo);
  }
  function handleDeleteTodo(todo){
    handleDeleteTask(todo);
  }
  function handleCheckTodo(todo){
    toggleTask(todo);
  }
  
  
// esta función se encarga de contar las tareas faltantes
  const completed=tasksItems.filter((todo)=>(!!todo.done)).length
  const all=tasksItems.length

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
      <TaskCreator createNewTask={handleAddTodo} />

      {/* tarea y funcionalidades */}
      <TaskTable
       task={tasksItems}      
       toggleTask={handleCheckTodo} 
       handleDelete={handleDeleteTodo} 
       EditTask={handleEditTodo} 
  
       />
      {/* tareas completadas */}
      <TodoCounter counter={completed} all={all} />


    </div>
  );
}

export default App;
