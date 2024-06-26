import { useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import { TaskForm } from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";
import { TaskList } from "../components/TaskList";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const [showTaskCompleted, setShowTaskCompleted] = useState(false)
  // console.log(obj);
  useEffect(() => {
    //const { data, error } = await supabase.auth.getSession();
    //console.log(data);
  }, []);

  return (
    <>
      <Navbar />
      <button onClick={() => supabase.auth.signOut()}
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          className="w-4 h-4 me-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
        </svg>
        <span>Logout</span>
      </button>

      <header>
        <span
          onClick={() => setShowTaskCompleted(false)}
          className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Pending</span>
        <span
          onClick={() => setShowTaskCompleted(true)}
          className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Completed</span>
      </header>
      <div className="mx-auto w-3/4 bg-white rounded-xl border-gray-800 border-2 p-6">
        <TaskList isComplete={showTaskCompleted} />
        <TaskForm />
      </div>
    </>
  );
};
