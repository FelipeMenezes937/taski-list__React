import React, { useState } from "react";
import proptypes from "proptypes";
import "./task-item.css";

export default function Taskitem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeletetask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const ontitlechange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeletetask(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="tak-item">
        <input
          type="text"
          value={editableTitle}
          onChange={ontitlechange}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle} </div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">pendente</option>
          <option value="concluindo">concluindo</option>
          <option value="Feito">feito</option>
        </select>
      </div>
    );
  }
}

Taskitem.prototypes = {
  id: proptypes.number.isRequired,
  title: proptypes.string.isRequired,
  taskState: proptypes.string.isRequired,
};
