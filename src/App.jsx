// import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ProtectedRoutes from "./Router/ProtectedRoutes"
import {BaseURLProvider} from './ContextAPI/BashURL'
const App = () => {
  return (
    <BaseURLProvider>

    <BrowserRouter>
    
    <ProtectedRoutes />
    </BrowserRouter>
    </BaseURLProvider>
  )
}

export default App