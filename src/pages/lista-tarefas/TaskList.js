import { useState} from "react";
import "./TaskList.css";

function TaskList() {
  const [id, setId] = useState(0);

  const [task, setTasks] = useState({id: id, task: ""  });
	const [listTask, setListTask] = useState([]);


	const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setTasks({ id, [name]: value });
  };

  const addTask = () => {
    setId(id + 1);
    setListTask([...listTask, task]);
      setTasks({ task: "" });

  };

	const clearTasks = () => {
		setListTask([]);
	};

  const excludTask = ({ target }) => {
    const { id } = target;
    const currentTasks = listTask.filter((task) =>  task.id !== Number(id));
    setListTask([...currentTasks]);
  };


  const doneTask = ({ target }) => {
    const { id } = target;
    const TaskDone = listTask.map((task) => { 
      console.log(task.id, id)
      return  task.id === Number(id) ? {...task, style: !task.style} : task;
    })
    setListTask([...TaskDone])
  };



  return (
    <div id="content-all">
      <header className="header_task">
       <h2>Lista de Tarefas</h2>
      </header>
      <main id="content">
        <div area-buttons>
          <input
            name="task"
            value={task.task}
            onChange={handleInputChange}
            type="text"
          />
          <button disabled={!task.task && true} onClick={addTask} >Adicionar</button>
          <button onClick={ clearTasks }>Limpar</button>
        </div>
        <div id="area-tarefas">
          <div>
            <ul>
              {listTask.map((task) => (
                <>
               <li 
                className={task.style && 'riscado'}
                key={ task.task }
                id={ task.id }
                
               >
                  { task.task }
                  <button 
                    name={ task.task } 
                    onClick={ excludTask }
                    id={ task.id }
                  >
                  Excluir
                  </button>
                  <button 
                    name={ task.task }
                    onClick={ doneTask }  
                    id={ task.id }
                  >
                  OK
                  </button>
                </li>
                </>
              ))}
            </ul>
          </div>
      </div>
      </main>

    </div>
  );

}

export default TaskList;
