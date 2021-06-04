import React, {FC, ChangeEvent, useState} from 'react';
import './App.css';

const App: FC  = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodo] = useState([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input type="text" placeholder="Task..." onChange={handleChange} />
        <input type="number" placeholder="Deadline in days..." onChange={handleChange}  />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todolist">

        </div>
    </div>
  );
}

export default App;
