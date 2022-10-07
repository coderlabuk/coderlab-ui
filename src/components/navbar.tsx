import * as React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, styled } from '@mui/material'
import logo from '../assets/logo/coderlab-caps.png'

const NavRoot = styled('div')(() => ({ flexGrow: 1 }))

const Left = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'secondary.light',
}))

const Right = styled('div')(() => ({ marginLeft: 'auto' }))

const Logo = styled('div')(() => ({
  bgcolor: 'transparent',
  backgroundImage: `url(${logo})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '50px',
  width: '140px',
}))

export const Navbar = () => {
  return (
    <NavRoot>
      <AppBar position='static' sx={{ bgcolor: 'primary.light' }}>
        <Toolbar>
          <Link to='/'>
            <Left>
              <Logo />
            </Left>
          </Link>
          <Right>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'black', '&:hover': { bgcolor: 'primary.main' } }}>About</Button>
            </Link>
          </Right>
        </Toolbar>
      </AppBar>
    </NavRoot>
  )
}
