import axios from "axios";
import React, { useState } from "react";

function AddPost() {

  const [userid, setUserid] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {

      const res = await axios.post(
        "http://127.0.0.1:8000/api/posts",
        {
          user_id: userid,
          title: title,
          body: body
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log(res.data);

    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <div>

      <h1>Add a Post</h1>

      <form onSubmit={handleSubmit}>

        <label>User id:</label>
        <input
          type="text"
          onChange={(e) => setUserid(e.target.value)}
        />

        <br />

        <label>Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <label>Body:</label>
        <input
          type="text"
          onChange={(e) => setBody(e.target.value)}
        />

        <br />

        <button type="submit">
          Add Post
        </button>

      </form>

    </div>
  );
}

export default AddPost;