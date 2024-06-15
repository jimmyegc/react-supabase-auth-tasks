import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export const TaskForm = () => {
  const [name, setName] = useState("");
  const { createTask, isLoading } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(name);
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a task"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button disabled={isLoading}>{isLoading ? "Adding..." : "Add"}</button>
      </form>
    </>
  );
};
