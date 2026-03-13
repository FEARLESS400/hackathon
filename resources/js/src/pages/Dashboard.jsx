import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

function Dashboard(){

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");
    
    axios.get('http://127.0.0.1:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch(err => {
      console.log("Unauthorized: ", err.response);
      navigate('/login');
    });
    
  }, []);

  const handleClick = async () => {

  const token = localStorage.getItem("token");

  try {

  await axios.post(
        "http://127.0.0.1:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      localStorage.removeItem("token");
      navigate("/login");

  } catch(err){
    console.log(err.response);
  }

  };

  return (
    <>
      <h1>Dashboard</h1>

      <Link to="/users">check users</Link>
      <Link to="/addpost">Add Post</Link>
      <br />

      <button onClick={handleClick}>
        Logout
      </button>
    </>
  );

}
export default Dashboard;