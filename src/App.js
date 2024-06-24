import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components2/Navbar/NavBar";
import TaskList from "./components2/TaskList/TaskList";
//usestate --> uma função react, chamados de hooks
//geralmente eles usam o sulfixo "use" alguma coisa
//tá retornando um array e desestruturando ele em 2
//

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    setTasks((existingsTasks) => {
      return [...existingsTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id == id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <TaskList
          title="pendente"
          onAddtasks={addTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          taskState="Pendente"
          onTaskUpdate={updateTask}
          onDeletetask={deleteTask}
        />
        <TaskList
          title="concluindo"
          onAddtasks={addTask}
          tasks={tasks.filter((t) => t.state == "concluindo")}
          onTaskUpdate={updateTask}
          taskState="concluindo"
          onDeletetask={deleteTask}
        />
        <TaskList
          title="feito"
          onAddtasks={addTask}
          tasks={tasks.filter((t) => t.state == "Feito")}
          onTaskUpdate={updateTask}
          taskState="Feito"
          onDeletetask={deleteTask}
        />
      </div>
    </div>
  );
}
