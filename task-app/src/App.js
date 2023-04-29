import { useState } from "react";
import { Overview } from "./component/Overview";

const App = () => {

  const [tasks, setTasks] = useState([]);

  const handleAdd = (value) => {
    setTasks([...tasks, value]);
  };

  return (
    <>
      <Overview
        filler='Insert task here'
        buttonLabel='Add task'
        pass={handleAdd}
      ></Overview>
      <div>
        {tasks.map(task => {
          return (
            <p>{task}</p>
          )})
        }
      </div>
    </>
  );
};

export default App;
