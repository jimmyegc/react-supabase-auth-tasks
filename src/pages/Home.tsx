import { useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import { TaskForm } from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";
import { TaskList } from "../components/TaskList";

export const Home = () => {
  const [showTaskCompleted, setShowTaskCompleted] = useState(false)
  // console.log(obj);
  useEffect(() => {
    //const { data, error } = await supabase.auth.getSession();
    //console.log(data);
  }, []);

  return (
    <>
      <h2>Home</h2>
      <button onClick={() => supabase.auth.signOut()}>Logout</button>
      <TaskForm />
      <header>
        <span>Tasks Pending</span>
        <button onClick={() => setShowTaskCompleted(!showTaskCompleted)}>Show Tasks Completed</button>
      </header>
      <TaskList isComplete={showTaskCompleted} />
    </>
  );
};
