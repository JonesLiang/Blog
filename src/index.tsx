import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import { createRoot } from 'react-dom/client'
const root = createRoot(document.querySelector('#root')!)
root.render(<App name="vortesnail" age={25} />)
