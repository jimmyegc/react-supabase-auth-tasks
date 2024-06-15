import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTask mus be used within a TaskContextProvider.");
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTasks = async (isComplete) => {

    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("tasks")
      .select()
      .eq("idUser", user?.id)
      .eq("isComplete", isComplete)
      .order("id", { ascending: true });

    if (error) throw error;
    setTasks(data);
  };

  const createTask = async (taskName) => {
    setIsLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      // console.log(user);
      const { data, error } = await supabase.from("tasks").insert({
        name: taskName,
        idUser: user?.id,
      });
      if (error) throw error;
      console.log(data);
      setTasks([...tasks, ...data]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (id) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("tasks")
      .delete()
      .eq("idUser", user.id)
      .eq("id", id);
    if (error) throw error;
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(data);
  };

  const updateTask = async (id, changes) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("tasks")
      .update(changes)
      .eq("idUser", user.id)
      .eq("id", id)
    if (error) throw error;
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(data);
  }

  return (
    <TaskContext.Provider
      value={{ tasks, getTasks, createTask, isLoading, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
