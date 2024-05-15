import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserLayout from './container/UserLayout'

const RoutesJs = () => {
  return (
    <Routes>
        <Route path='/*' element={<UserLayout/>}/>
    </Routes>
  )
}

export default RoutesJs