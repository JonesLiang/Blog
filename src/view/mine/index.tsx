import React, { FC } from 'react'
import { Link } from 'react-router-dom'
type p = {}

const Mine: FC<p> = () => {
  return (
    <div>
      Mine
      <Link to={'/home'}>home</Link>
      <br />
      <Link to={'/'}>app</Link>
    </div>
  )
}

export default Mine
