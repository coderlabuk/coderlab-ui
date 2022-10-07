import React, { FunctionComponent } from 'react'
import { Typography, Grid, styled } from '@mui/material'
import sainsburys from '../assets/logo/sainsburys.png'
import citysprint from '../assets/logo/citysprint.png'
import astrazeneca from '../assets/logo/astrazeneca.png'
import convex from '../assets/logo/convex.png'

interface ClientsProps {}

interface LogoProps {
  url: string
}

export const Logo: FunctionComponent<LogoProps> = (props) => {
  const LogoInner = styled('div')(() => ({
    bgcolor: 'transparent',
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: 'none',
    height: '70px',
    width: '200px',
  }))

  return (
    <Grid item sx={{ display: 'flex', justifyContent: 'center' }} xs={12} sm={6} md={3}>
      <LogoInner />
    </Grid>
  )
}

const ClientsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(3),
}))

export const Clients: FunctionComponent<ClientsProps> = (props) => {
  return (
    <ClientsContainer>
      <Typography variant='h4' component='h4' sx={{ mb: 5 }}>
        Our clients
      </Typography>
      <Grid container spacing={3}>
        <Logo url={sainsburys} />
        <Logo url={citysprint} />
        <Logo url={astrazeneca} />
        <Logo url={convex} />
      </Grid>
    </ClientsContainer>
  )
}
