import { useTasks } from "../context/TaskContext";

export const TaskCard = ({ task }) => {
  const { deleteTask, updateTask } = useTasks();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleComplete = () => {
    updateTask(task.id, { isComplete: !task.isComplete })
  };
  return (
    <div key={task.id}>
      {JSON.stringify(task)}
      <h2>{task.name}</h2>
      <h3>{JSON.stringify(task.isComplete)}</h3>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggleComplete}>Complete</button>
    </div>
  );
};
