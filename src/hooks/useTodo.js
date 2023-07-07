import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useTodo(){
    
    const [tasksItems, setTasksItems] = useState([]);

    let index = uuidv4();
    function createNewTask(taskName){
      if(!tasksItems.find(task => task.name === taskName)){ // este comando impide que se repitan dos tareas iguales 
        setTasksItems([...tasksItems, {id:index , name: taskName, done: false}]) // esta es la forma como se copia y se realiza el push
      }else{
        alert("Task repeated")
      }
    }
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
  // función para eliminar las tareas 
  const handleDeleteTask= ( taskName ) => { //argumento cualquiera
  const temp=tasksItems.filter((task)=>task.name !== taskName) //muestra las tareas menos la que le digo 
  setTasksItems(temp)
  }
   // // esta función se encarga de cambiar el check de true a false.
  const toggleTask=task=>{
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name)?{...t,done: !t.done}:t)
      )
    }


    return{
        createNewTask,
        tasksItems,
        EditTask,
        handleDeleteTask,
        toggleTask,
        setTasksItems

    }
}
export {useTodo}
