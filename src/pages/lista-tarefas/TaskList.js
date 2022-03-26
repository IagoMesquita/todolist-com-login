import { useState, useEffect } from "react";
import "./TaskList.css";

function TaskList() {
  const [task, setTasks] = useState({ task: "" });
	console.log('task', task);
	const [listTask, setListTask] = useState([]);
	console.log('listTask', listTask);


	const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setTasks({ [name]: value });
  };

  const addTask = () => {
    setListTask([...listTask, task]);
    setTasks({ task: "" });
  };

	const clearTasks = () => {
		setListTask([]);
	};

  const excludTask = ({ target }) => {
    const { name } = target;
    const currentTasks = listTask.filter((task) =>  task.task !== name);
    console.log('TAks diferentes', currentTasks);
    setListTask([...currentTasks]);
  };

  return (
    <div>
      <div className="header_task">
       <h2>Lista de Tarefas</h2>
      </div>
      <div area-buttons>
        <input
          name="task"
          value={task.task}
          onChange={handleInputChange}
          type="text"
        />
        <button onClick={addTask}>Adicionar</button>
        <button>Concluida</button>
        <button onClick={ clearTasks }>Limpar</button>
      </div>
      <div id="area-tarefas">
        <div>
          <ul>
            {listTask.map((task) => (
              <>
              <li key={ task.task }>{ task.task }
                <button name={ task.task } onClick={ excludTask } key={ task.task }>Excluir</button>
              </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
