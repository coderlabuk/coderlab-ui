import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppContainer } from './app'
import { Landing } from './landing'
import { About } from './about'
import { Contact } from './contact'

export const AppRoutes = () => (
  <Router>
    <AppContainer>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AppContainer>
  </Router>
)
