import * as React from 'react'
import { Navbar } from './navbar'
import { Footer } from './footer'

export const AppContainer = (props: any) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}
