import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleLogin(data) {
    try {
      const result = await axios.get("http://localhost:3490/users");
      const match = result.data.find(
        (user) => user.rollno === data.rollno && user.password === data.password
      );

      if (match) {
        localStorage.setItem("loggedInUser", JSON.stringify(match));
        navigate("/aboutpage");
      } else {
        setError("Invalid roll number or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div>
      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleLogin)}>
        <h3>Login</h3>

        <div>
          <label className="form-label mt-4">Roll No:</label>
          <input type="text" {...register("rollno")} className="form-control" />
        </div>

        <div>
          <label className="form-label mt-4">Password:</label>
          <input type="password" {...register("password")} className="form-control" />
        </div>

        {error && <p className="text-danger mt-3">{error}</p>}

        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
}

export default Login;
