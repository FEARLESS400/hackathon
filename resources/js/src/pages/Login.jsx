import axios from "axios";
import { useState } from "react";
import "../styles/Login.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

const handleLogin = async () => {

  try {

    const res = await axios.post("http://127.0.0.1:8000/api/login",{
      email,
      password
    });

    const token = res.data.token;

    localStorage.setItem("token", token);

    navigate("/dashboard");

  } catch(err){
    console.log(err);
  }

};

  return (
    <div className="login-container">

        <form onSubmit={handleLogin} className="login-card">

        <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            onChange={(e)=>setEmail(e.target.value)}
            />

          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <Link to='/register'>Register first</Link>

        </form>

      </div>

  );
}

export default Login;