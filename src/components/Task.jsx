import React from 'react';
function Task({ name, completed }) {
  return (
    <div>
      <span>{name}</span>
      {completed ? <span> ✔️</span> : <span> ❌</span>}
    </div>
  );
}
export default Task;











