import React from 'react'
import RoutesJs from './Routes'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <RoutesJs />
    </AuthProvider>

  )
}

export default App