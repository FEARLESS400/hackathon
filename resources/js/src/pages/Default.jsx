import React from 'react'
import { Link } from 'react-router-dom';

function Default() {
  return (
    <div><p>Hackathon Web Site <Link to='/login'>Login</Link> Or <Link to='/register'>Register</Link> </p></div>
  )
}

export default Default