import React, { Component } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from 'Src/view/home'
import Mine from 'Src/view/mine'
import APP from 'Src/app'

export default class Router extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" exact element={<APP />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/mine" exact element={<Mine />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    )
  }
}
