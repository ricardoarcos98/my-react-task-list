import React from 'react'
import { TaskRow } from './TaskRow'
export const TaskTable = ({tasks,  toggleTask}) => {
  return (
    <table>
    <thead>
      <tr>
        <th>  </th>
      </tr>
    </thead>
    <tbody>

  {
    tasks.map( task => (  //esto se hace para recorrer el arreglo y mostrarlo
    <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>  
    ))
  }
    </tbody>
  </table>

  )
}
