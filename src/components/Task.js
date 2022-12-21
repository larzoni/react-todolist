const Task = ({ task, handleCheck }) => {
  return (
    <li>
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={task.completed}
        onChange={() => handleCheck(task.id)}
      />

      <h3>{task.text}</h3>
      <p>{task.category}</p>
    </li>
  );
};

export default Task;
