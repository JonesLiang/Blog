import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      1234APP
      <br />
      <Link to={'/mine'}>mine</Link>
      <br />
      <Link to={'/home'}>home</Link>
      <br />
      <Link to={'/'}>app</Link>
      <br />
      <Link to={'/error'}>error</Link>
    </div>
  )
}

export default App
