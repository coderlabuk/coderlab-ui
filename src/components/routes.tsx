import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppContainer } from './app'
import { Landing } from './landing'
import { About } from './about'

export const AppRoutes = () => (
  <Router>
    <AppContainer>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </AppContainer>
  </Router>
)
