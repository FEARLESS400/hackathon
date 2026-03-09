const token = localStorage.getItem("token");

axios.post("http://127.0.0.1:8000/api/logout",{},{
  headers:{
    Authorization:`Bearer ${token}`
  }
});

localStorage.removeItem("token");