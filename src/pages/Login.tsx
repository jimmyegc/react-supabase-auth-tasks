import { useState } from "react";
import { supabase } from "../supabase/client";

export const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await supabase.auth.signInWithOtp({
        email: email,
      });
      //console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </>
  );
};
