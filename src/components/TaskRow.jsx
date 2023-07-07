import React, { useState } from "react";
export const TaskRow = ({ task, toggleTask, handleDelete, EditTask }) => {
 
  // ayuda a la logica con el input cuando cambia
  const [switchEdit, setSwitchEdit]=useState(false)
  const [edit, setEdit]=useState(task)
  


  if(switchEdit){
    return(
      <>
      <input 
       value={edit.name}
       onChange={(e)=>{setEdit({...edit, 
      name: e.target.value
      })}}
      />
      <button onClick={()=>
        {EditTask(edit );
        setSwitchEdit(false)
        }}>
        SAVE
      </button>
      </>
    )
  }else{
    return (
      <li>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task)  }
            />
          {task.name}

          {/* Boton Eliminar  */}
          <button
            type="submit"
            onClick={() => {
              handleDelete(task.name);
            }}
            className="Delete"
            >
            DELETE
          </button>

          {/* Boton Editar  */}
          
          <button
            onClick={() => {
              setSwitchEdit(true);
            }}
            className="Edit"
          >
            EDIT
          </button>
      </li>

    );  
  }
};
