import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordConfirmation,setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {

      const res = await axios.post("http://127.0.0.1:8000/api/register",{
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      });

      const token = res.data.token;

      localStorage.setItem("token", token);

      navigate('/login');      

    } catch(err){
      console.log(err.response.data.message);
      setError(err.response.data);
    }

  };

  return (

    <div className="register-container">

      <form onSubmit={handleRegister} className="register-card">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Name"
          autoComplete="name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          onChange={(e)=>setPasswordConfirmation(e.target.value)}
        />

        {
          error && error
        }

        <button type="submit">
          Register
        </button>

        <Link to='/login'>already have an account</Link>

      </form>

    </div>

  );
}

export default Register;