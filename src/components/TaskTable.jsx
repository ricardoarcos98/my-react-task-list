import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ task, setTasksItems, toggleTask, handleDelete, EditTask }) => {
  return (
  <ul>
    
        {task.map(
          (task) => (
              <TaskRow
              key={task.name} // cada key es distinto, por eso es con name.
              task={task}
              setTasksItems={setTasksItems}
              toggleTask={toggleTask}
              handleDelete={handleDelete}
              EditTask={EditTask }
              
              />
              )
              )}
    
   </ul> 
  );
};
