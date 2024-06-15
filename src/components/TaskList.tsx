import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  isComplete: boolean
}
export const TaskList = ({ isComplete }: TaskListProps) => {

  const { tasks, getTasks, isLoading } = useTasks();

  useEffect(() => {
    //console.log(completed)
    getTasks(isComplete);
  }, [isComplete]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else if (tasks.lenght === 0) {
    return <p>No Tasks found</p>;
  } else {
    return (
      <>
        <h2>Tasklist</h2>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </>
    );
  }
};
