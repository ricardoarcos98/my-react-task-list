import React, { useState } from "react";
import { TfiBrush } from "react-icons/tfi";
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
      <button onClick={()=> {EditTask(edit );
        setSwitchEdit(false) }}>
        SAVE
      </button>
      </>
    )
  }else{
    return (
      <li className="TodoItem">
          <input
            className="TodoItem-p  "
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task)   
            }
            />
           
            {task.name}
            
          
          
          <button
            onClick={() => {
              setSwitchEdit(true);
            }}
            className="Edit"
          >
            EDIT
            </button>


          <button
            type="submit"
            onClick={() => {
              handleDelete(task.name);
            }}
            className="Delete"
            >
            X
          </button>
          
      </li>

    );  
  }
};
