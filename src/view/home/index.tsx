import React, { FC } from 'react'
import { Link } from 'react-router-dom'
type p = {}

const Home: FC<p> = () => {
  return (
    <div>
      home
      <Link to={'/mine'}>mine</Link>
      <br />
      <Link to={'/'}>app</Link>
    </div>
  )
}

export default Home
