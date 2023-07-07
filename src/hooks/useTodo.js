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
    return{
        createNewTask,
        tasksItems

    }
}
export {useTodo}
