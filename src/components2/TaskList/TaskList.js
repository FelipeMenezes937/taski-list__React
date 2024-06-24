import React from "react";
import Proptypes from "proptypes";
import "./taskli.css";
import Taskitem from "../task_item/Taskitem";
import plusIcon from "../../img/botao-adicionar.png";
//o "title" é uma desestruturação do props
//props são como variáveis
export default function TaskList({
  title,
  onAddtasks,
  tasks,
  onTaskUpdate,
  taskState,
  onDeletetask,
}) {
  const Addtask = () => {
    onAddtasks("Nova Tarefa", taskState);
  };
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <Taskitem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeletetask={onDeletetask}
            />
          );
        })}
        {tasks.length === 0 && (
          <div className="empty-list">
            lista vazia <br />
          </div>
        )}
        <button onClick={Addtask} className="btn" alt="plusIcon">
          <img src={plusIcon} />
          adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

//aqui definimos quais props vamos usar, e quais os tipos de props são,
//semelhante ao typescript
TaskList.prototype = {
  title: Proptypes.string,
  onAddTask: Proptypes.func.isRequired,
  tasks: Proptypes.array.isRequired,
};
