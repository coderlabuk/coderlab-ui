import * as React from 'react'
import { Typography, Grid, Link, styled } from '@mui/material'
import { LinkedIn, Email } from '@mui/icons-material'

const Address = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Typography>London (Head Office)</Typography>
      <Typography>Kemp House </Typography>
      <Typography>160 City Road</Typography>
      <Typography>London</Typography>
      <Typography>EC1V 2NX</Typography>
    </Grid>
  )
}

const Row = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
}))

const ContactDetails = () => {
  const contactDetail = { ml: 1, color: 'black' }
  return (
    <Grid item xs={12} sm={4}>
      <Row>
        <Email />
        <Link href='mailto:info@coderlab.co.uk' sx={contactDetail}>
          info@coderlab.co.uk
        </Link>
      </Row>
      <Row>
        <LinkedIn />
        <Link href='https://linkedin.com/coderlab-ltd' sx={contactDetail}>
          linkedin
        </Link>
      </Row>
    </Grid>
  )
}

export const Footer = () => {
  const container = { p: 4, bgcolor: 'primary.main' }
  return (
    <Grid container justifyContent='space-evenly' spacing={3} sx={container}>
      <Address />
      <ContactDetails />
    </Grid>
  )
}
