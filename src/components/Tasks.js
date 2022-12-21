import Task from "./Task";

//we could pass in props here to get an object back, but we choose to write tasks instead and to spread it using curly braces
const Tasks = ({ tasks, handleCheck }) => {
  return (
    <div>
      <h2>Incomplete</h2>
      <ul>
        {tasks
          .filter((task) => task.completed === false)
          .map((task) => (
            <Task task={task} key={task.id} handleCheck={handleCheck} />
          ))}
      </ul>
      <h2>Complete</h2>
      <ul>
        {tasks
          .filter((task) => task.completed === true)
          .map((task) => (
            <Task task={task} key={task.id} handleCheck={handleCheck} />
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
