import React from "react";

export const TaskRow = ({task, toggleTask}) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
        {task.name}
      </td>
    </tr>
  );
};
