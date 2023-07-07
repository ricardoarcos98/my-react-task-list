import React from "react";
import { TaskRow } from "./TaskRow";
import "../TodoList.css"
import "../TodoItem.css"

export const TaskTable = ({ task, toggleTask, handleDelete, EditTask }) => {
  return (
  <ul className=" TodoList">
    
        {task.map(
          (task, index) => (
              <TaskRow
              className="TodoItem"
              key={index} // cada key es distinto, por eso es con name.
              task={task}
              toggleTask={toggleTask}
              handleDelete={handleDelete}
              EditTask={EditTask }
              />
              )
              )}
    
   </ul> 
  );
};
