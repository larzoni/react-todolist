import { useState } from "react";

const AddTask = ({ taskLen, createTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState({
    textErr: false,
    categoryErr: false,
  });

  const submitNewTask = (e) => {
    e.preventDefault();

    if (e.target.text.value && e.target.category.value) {
      createTask({
        id: ++taskLen,
        text: e.target.text.value,
        category: e.target.category.value,
        completed: false,
      });

      Array.from(e.target.querySelectorAll("input")).map(
        (input) => (input.value = "")
      );
    } else {
      e.target.text.value
        ? setShowErrorMsg((prev) => ({ ...prev, textErr: false }))
        : setShowErrorMsg((prev) => ({ ...prev, textErr: true }));
      e.target.category.value
        ? setShowErrorMsg((prev) => ({ ...prev, categoryErr: false }))
        : setShowErrorMsg((prev) => ({ ...prev, categoryErr: true }));
    }
  };

  return (
    <div>
      <button onClick={() => setShowAddTask(true)}>+</button>
      {showAddTask && (
        <section>
          <form onSubmit={submitNewTask}>
            <button onClick={() => setShowAddTask(false)}>To go back</button>
            <input type="text" name="text" placeholder="Title" />
            {showErrorMsg.textErr && <span>Please write a title</span>}
            <input type="text" name="category" placeholder="category" />
            {showErrorMsg.categoryErr && <span>Please add a category</span>}
            <button type="submit">Add task</button>
          </form>
        </section>
      )}
    </div>
  );
};
export default AddTask;
