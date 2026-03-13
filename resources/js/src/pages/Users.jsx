import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate;

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
    
    useEffect(() => {

        const fetchedUsers = async() => {
            try{
            const res = await axios.get('http://127.0.0.1:8000/api/users')

            setUsers(res.data);

            } catch(err) {
                console.log(err);
            }
        }

        fetchedUsers();

    }, []);


  return (
    <div>
        <h1>Users List</h1>

        <div>
            { users.length > 0 ?
                users.map((user) => (
                    <ul key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                        <li>{user.created_at}</li>
                        <li>{user.updated_at}</li>
                    </ul>
                )) : <p>users Not Found</p>
            }
        </div>
    </div>
  )
}

export default Users