// cra el input y el boton de save task 

import { useState } from "react";
export const TaskCreator = ({createNewTask}) => { 
  // utiliza props 

  const [newTaskName, setNewTaskName] = useState("");
  // crea una funcion que se encarga en enviar el formulario y guardarlo

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName); // llama a la función en app utiliza props 
    setNewTaskName(""); // para que aparezca en vacio cuando se escribe una tarea 
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName} // nos sirve para que aparezca vacio cuando se quiere hacer otra llamada 
        onChange={(e) => setNewTaskName(e.target.value)} // se entiende que va a cambiar por lo cual hace un llamado
      />
      <button>ADD</button> 
    </form>
    </>

  );
};
