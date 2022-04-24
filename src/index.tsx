import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Routers from './router'
const root = createRoot(document.querySelector('#root')!)
root.render(
  <BrowserRouter>
    <Routers></Routers>
  </BrowserRouter>
)
